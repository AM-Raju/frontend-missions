import React, { useRef } from "react";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
  hover: {
    opacity: 1,
  },
};

const GestureDrug = () => {
  const parentRef = useRef(null);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={parentRef}
        className="border border-red-500 size-[500px] rounded-lg flex items-center justify-center"
      >
        <motion.div
          className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
          dragSnapToOrigin={true}
          dragElastic={0.5}
          dragConstraints={parentRef}
          whileDrag={{
            scale: 1.1,
            boxShadow: "0 10px 10px #000",
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default GestureDrug;
