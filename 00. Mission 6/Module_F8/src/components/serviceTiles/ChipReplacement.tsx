import React from "react";

import { motion } from "framer-motion";
import useScrollHook from "@/hooks/useScrollHook";

const ChipReplacement = () => {
  const { style, componentRef } = useScrollHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 col-span-6 lg:col-span-5 h-[415px] rounded-2xl"
    ></motion.div>
  );
};

export default ChipReplacement;
