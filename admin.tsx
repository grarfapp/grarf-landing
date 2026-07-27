import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { GRARFAdminApp } from "./src/admin/GRARFAdminApp";
import { isSingularityAdminPageId } from "./src/admin/singularityAdminNav";
import "./admin.css";

function SingularityAdminRoute() {
  const { pageId } = useParams<{ pageId?: string }>();
  if (pageId && !isSingularityAdminPageId(pageId)) {
    return <Navigate to="/singularity/evidence" replace />;
  }
  return <GRARFAdminApp />;
}

const rootElement = document.getElementById("root") ?? document.getElementById("grarf-web-root");
if (!rootElement) {
  throw new Error("GRARF Admin root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/operations" replace />} />
        <Route path="/operations" element={<GRARFAdminApp />} />
        <Route path="/singularity" element={<Navigate to="/singularity/evidence" replace />} />
        <Route path="/singularity/:pageId" element={<SingularityAdminRoute />} />
        <Route path="*" element={<Navigate to="/operations" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
