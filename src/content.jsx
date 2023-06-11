import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TafseerContentScriptHolder from "./components/content-scripts/TafseerContentScriptHolder";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <TafseerContentScriptHolder />
  </React.StrictMode>
);
