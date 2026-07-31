import { once } from "node:events";
import { createPortfolioServer } from "./dev.mjs";

const server = createPortfolioServer();
server.listen(0, "127.0.0.1");
await once(server, "listening");

const address = server.address();
if (!address || typeof address === "string") {
  throw new Error("Local server did not provide a TCP port");
}
const origin = `http://127.0.0.1:${address.port}`;

try {
  const [
    pageResponse,
    architectureResponse,
    networkEngineeringResponse,
    ltePlanningResponse,
    securityResponse,
    resumeResponse,
  ] = await Promise.all([
      fetch(`${origin}/`),
      fetch(`${origin}/assets/diagrams/22_architecture_diagram.png`),
      fetch(`${origin}/assets/network-engineering/multi-area-ospf-topology.png`),
      fetch(`${origin}/assets/lte-network-planning/downlink-coverage-prediction.png`),
      fetch(`${origin}/assets/security-labs/ssh-encrypted-packet-analysis.jpg`),
      fetch(`${origin}/downloads/nihar-majalikar-resume-public.pdf`),
    ]);

  if (
    !pageResponse.ok ||
    !architectureResponse.ok ||
    !networkEngineeringResponse.ok ||
    !ltePlanningResponse.ok ||
    !securityResponse.ok ||
    !resumeResponse.ok
  ) {
    throw new Error(
      `Static serving failed: page ${pageResponse.status}, architecture ${architectureResponse.status}, network engineering ${networkEngineeringResponse.status}, LTE planning ${ltePlanningResponse.status}, security ${securityResponse.status}, resume ${resumeResponse.status}`,
    );
  }

  const page = await pageResponse.text();
  if (!page.includes("Nihar Majalikar builds and documents networked systems.")) {
    throw new Error("Local server returned unexpected page content");
  }

  console.log(
    `Smoke test passed: page ${pageResponse.status}, architecture ${architectureResponse.status}, network engineering ${networkEngineeringResponse.status}, LTE planning ${ltePlanningResponse.status}, security evidence ${securityResponse.status}, resume ${resumeResponse.status}.`,
  );
} finally {
  server.close();
  await once(server, "close");
}
