import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function resolveRequestPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const relativePath = decoded === "/" ? "index.html" : decoded.replace(/^\/+/, "");
  const isPublicFile =
    relativePath.startsWith("assets/") ||
    relativePath.startsWith("downloads/") ||
    relativePath === "og.png" ||
    relativePath === "og-portfolio.jpg";
  const sourcePath = isPublicFile
    ? join(projectRoot, "public", relativePath)
    : join(projectRoot, relativePath);
  const safePath = normalize(sourcePath);

  if (safePath !== projectRoot && !safePath.startsWith(`${projectRoot}${sep}`)) {
    return null;
  }

  return safePath;
}

export function createPortfolioServer() {
  return createServer((request, response) => {
    const filePath = resolveRequestPath(request.url || "/");

    if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
  });
}

const isDirectRun =
  process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (isDirectRun) {
  const server = createPortfolioServer();
  server.listen(port, "127.0.0.1", () => {
    console.log(`Local URL: http://127.0.0.1:${port}`);
  });
}
