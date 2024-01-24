import { motion, useScroll } from "framer-motion";
import React from "react";

const UseScrollHook = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full h-[500vh] bg-purple-400">
      <motion.div
        className="bg-orange-500  fixed right-0 h-full w-2"
        style={{ originY: 0, scaleY: scrollYProgress }}
      ></motion.div>
      <motion.div
        className="bg-orange-500  fixed top-0 h-2 w-full"
        style={{ originX: 1, scaleX: scrollYProgress }}
      ></motion.div>
    </div>
  );
};

export default UseScrollHook;
