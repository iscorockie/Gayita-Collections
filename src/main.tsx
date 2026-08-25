import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import favicon from "./assets/favicon.png";

// Inject favicon at runtime so it respects the deployment base path
for (const rel of ["icon", "apple-touch-icon"]) {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = favicon;
  document.head.appendChild(link);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
