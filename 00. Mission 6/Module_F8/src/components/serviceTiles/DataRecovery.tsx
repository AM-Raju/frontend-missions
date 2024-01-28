import useScrollHook from "@/hooks/useScrollHook";
import { motion } from "framer-motion";
const DataRecovery = () => {
  const { style, componentRef } = useScrollHook();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 col-span-6 lg:col-span-7 h-[415px] rounded-2xl"
    ></motion.div>
  );
};

export default DataRecovery;
