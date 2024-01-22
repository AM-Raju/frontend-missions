import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MotionElement from "./pages/MotionElement.tsx";
import VariantAndStagger from "./pages/VariantAndStagger.tsx";
import Gesture from "./pages/Gesture.tsx";
import GestureDrug from "./pages/GestureDrug.tsx";
import KeyframeAnimation from "./pages/KeyframeAnimation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MotionElement></MotionElement> */}
    {/* <VariantAndStagger></VariantAndStagger> */}
    {/* <Gesture></Gesture> */}
    {/* <GestureDrug></GestureDrug> */}
    <KeyframeAnimation></KeyframeAnimation>
  </React.StrictMode>
);
