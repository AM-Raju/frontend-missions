import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const UseInViewHook = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true });
  console.log(inView);

  return (
    <div>
      <div className="bg-orange-500 h-[200vh] w-full"></div>
      <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
        <motion.div
          ref={ref}
          className="size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 500 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default UseInViewHook;
