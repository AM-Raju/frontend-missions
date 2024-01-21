import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MotionElement from "./pages/MotionElement.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionElement></MotionElement>
  </React.StrictMode>
);
