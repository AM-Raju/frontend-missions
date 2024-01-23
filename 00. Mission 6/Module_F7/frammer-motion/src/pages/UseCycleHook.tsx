import React from "react";
import { motion, useCycle } from "framer-motion";

const UseCycleHook = () => {
  const cycleOption = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100, opacity: 0.5 },
    { x: -100, y: 100, opacity: 0.25 },
    { x: -100, y: -100, opacity: 0 },
  ];

  const [animate, cycle] = useCycle(...cycleOption);
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        className="size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        animate={animate}
        onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default UseCycleHook;
