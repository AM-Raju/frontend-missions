import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const useScrollHook = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const style = {
    scale: useTransform(scrollYProgress, [0, 1], [0.9, 1]),
    opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
  };

  return { style, componentRef };
};

export default useScrollHook;
