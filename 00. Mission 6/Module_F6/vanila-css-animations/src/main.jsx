import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Button from "./components/Button/Button.jsx";
import AnimationBasic from "./components/animation-basic/AnimationBasic.jsx";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation.jsx";
import ClipPathTransition from "./components/ClipPathTransition/ClipPathTransition.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Button></Button> */}
    {/* <AnimationBasic></AnimationBasic> */}
    {/* <LoadingAnimation></LoadingAnimation> */}
    <ClipPathTransition></ClipPathTransition>
  </React.StrictMode>
);
