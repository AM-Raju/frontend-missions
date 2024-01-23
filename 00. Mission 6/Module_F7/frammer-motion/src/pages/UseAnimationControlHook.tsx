import React, { useEffect, useState } from "react";

import { motion, useAnimationControls } from "framer-motion";

const UseAnimationControlHook = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, [controls]);

  return (
    <div
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({ x: 0, transition: { delay: 1 } })}
      className="border border-red-500 size-96 flex flex-col justify-center items-center"
    >
      <motion.div
        className=" size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        animate={controls}
        custom={1}
      ></motion.div>
      <motion.div
        className=" size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        animate={controls}
        custom={2}
      ></motion.div>
      <motion.div
        className=" size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
        animate={controls}
        custom={3}
      ></motion.div>
    </div>
  );
};

export default UseAnimationControlHook;
