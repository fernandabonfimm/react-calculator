import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/calculator/index.tsx";
import "../src/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
