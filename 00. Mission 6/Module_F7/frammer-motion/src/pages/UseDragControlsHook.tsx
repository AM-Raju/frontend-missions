import React from "react";
import { motion, useDragControls } from "framer-motion";

const UseDragControlsHook = () => {
  const controls = useDragControls();
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <div
        onPointerDown={(e) => controls.start(e, { snapToCursor: true })}
        className="w-44 h-10 bg-green-500 mb-5 rounded-lg flex flex-wrap gap-5"
      ></div>
      <motion.div
        className="size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        drag="x"
        dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default UseDragControlsHook;
