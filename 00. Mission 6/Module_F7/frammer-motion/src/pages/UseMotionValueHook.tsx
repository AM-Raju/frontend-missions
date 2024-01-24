import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const UseMotionValueHook = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-600, 600], [1, 0]);
  const rotate = useTransform(x, [-600, 600], [0, 360]);
  const scale = useTransform(x, [-200, 200], [0.8, 1.2]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
        <motion.div
          className="size-44 bg-indigo-500 rounded-lg "
          style={{ x, opacity, rotate, scale }}
          drag="x"
          dragSnapToOrigin
        ></motion.div>
      </div>
    </div>
  );
};

export default UseMotionValueHook;
