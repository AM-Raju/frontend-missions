import { motion } from "framer-motion";

const VariantAndStagger = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 180, scale: 1 },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 180, scale: 1 },
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <motion.div className="size-20 bg-cyan-400" variants={child}></motion.div>
        <motion.div className="size-20 bg-cyan-400" variants={child}></motion.div>
        <motion.div className="size-20 bg-cyan-400" variants={child}></motion.div>
        <motion.div className="size-20 bg-cyan-400" variants={child}></motion.div>
      </motion.div>
    </div>
  );
};

export default VariantAndStagger;
