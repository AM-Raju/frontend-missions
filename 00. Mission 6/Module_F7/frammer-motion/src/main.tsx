import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MotionElement from "./pages/MotionElement.tsx";
import VariantAndStagger from "./pages/VariantAndStagger.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MotionElement></MotionElement> */}
    <VariantAndStagger></VariantAndStagger>
  </React.StrictMode>
);
