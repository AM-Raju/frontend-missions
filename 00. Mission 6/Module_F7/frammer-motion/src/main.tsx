import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MotionElement from "./pages/MotionElement.tsx";
// import VariantAndStagger from "./pages/VariantAndStagger.tsx";
// import Gesture from "./pages/Gesture.tsx";
// import GestureDrug from "./pages/GestureDrug.tsx";
// import KeyframeAnimation from "./pages/KeyframeAnimation.tsx";
// import UseAnimationControlHook from "./pages/UseAnimationControlHook.tsx";
import UseCycleHook from "./pages/UseCycleHook.tsx";
import UseInViewHook from "./pages/UseInViewHook.tsx";
import UseAnimateHook from "./pages/UseAnimateHook.tsx";
import UseDragControlsHook from "./pages/UseDragControlsHook.tsx";
import UseMotionValueHook from "./pages/UseMotionValueHook.tsx";
import UseScrollHook from "./pages/UseScrollHook.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MotionElement></MotionElement> */}
    {/* <VariantAndStagger></VariantAndStagger> */}
    {/* <Gesture></Gesture> */}
    {/* <GestureDrug></GestureDrug> */}
    {/* <KeyframeAnimation></KeyframeAnimation> */}
    {/* <UseAnimationControlHook></UseAnimationControlHook> */}
    {/* <UseCycleHook></UseCycleHook> */}
    {/* <UseInViewHook></UseInViewHook> */}
    {/* <UseAnimateHook></UseAnimateHook> */}
    {/* <UseDragControlsHook></UseDragControlsHook> */}
    {/* <UseMotionValueHook></UseMotionValueHook> */}
    <UseScrollHook></UseScrollHook>
  </React.StrictMode>
);
