import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GRARFAdminApp } from "./src/admin/GRARFAdminApp";
import "./admin.css";

const rootElement = document.getElementById("root") ?? document.getElementById("grarf-web-root");
if (!rootElement) {
  throw new Error("GRARF Admin root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <GRARFAdminApp />
  </StrictMode>
);
