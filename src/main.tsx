import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@root/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
