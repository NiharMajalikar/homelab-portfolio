import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const outputDirectory = path.resolve("out");
const port = Number(process.env.PORT ?? 4173);
const host = process.env.HOST ?? "127.0.0.1";
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? "/", `http://${host}:${port}`);
    const decodedPath = decodeURIComponent(requestUrl.pathname);
    let filePath = path.resolve(outputDirectory, `.${decodedPath}`);

    if (!filePath.startsWith(outputDirectory)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const fileStats = await stat(filePath).catch(() => null);
    if (fileStats?.isDirectory()) filePath = path.join(filePath, "index.html");

    const finalStats = await stat(filePath).catch(() => null);
    if (!finalStats?.isFile()) {
      response.writeHead(404).end("Not found");
      return;
    }

    const contentType =
      contentTypes[path.extname(filePath).toLowerCase()] ??
      "application/octet-stream";
    response.writeHead(200, { "Content-Type": contentType });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(500).end("Server error");
  }
}).listen(port, host, () => {
  console.log(`Static portfolio preview: http://${host}:${port}/`);
});
