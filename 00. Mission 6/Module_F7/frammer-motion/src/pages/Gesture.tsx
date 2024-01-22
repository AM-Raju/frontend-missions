import React from "react";
import { motion } from "framer-motion";

const Gesture = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 180,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 2,
      },
    },
    tap: { backgroundColor: "#fcba03" },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileTap="tap"
        whileHover="hover"
        onHoverStart={() => {
          console.log("Hover started");
        }}
        onHoverEnd={() => {
          console.log("Hover Ended");
        }}
      ></motion.div>
    </div>
  );
};

export default Gesture;
