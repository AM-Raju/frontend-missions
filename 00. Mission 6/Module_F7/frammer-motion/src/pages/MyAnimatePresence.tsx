import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyAnimatePresence = () => {
  const [visible, setVisible] = useState(true);

  const box = {
    invisible: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0.3,
      scale: 0.5,
      // y: 200,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center gap-3">
        <AnimatePresence>
          <motion.button
            layout
            onClick={() => setVisible(!visible)}
            className="bg-orange-500 px-4 py-2 rounded-md "
          >
            Toggle
          </motion.button>
          {visible && (
            <motion.div
              className="size-44 bg-purple-500 rounded-lg"
              variants={box}
              initial="invisible"
              animate="visible"
              exit="exit"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyAnimatePresence;
