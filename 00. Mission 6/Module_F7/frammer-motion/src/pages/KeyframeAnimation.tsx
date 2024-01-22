import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    x: [0, 300, -300, 0],
    y: [0, 300, -300, 0],
    rotate: [0, 300, -300, 0],
    opacity: 1,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 5,
      opacity: {
        duration: 0.5,
      },
      rotate: {
        repeat: Infinity,
        delay: 0.2,
      },
    },
  },
};
const KeyframeAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-red-500 size-[500px] rounded-lg flex items-center justify-center">
        <motion.div
          className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          variants={parent}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </div>
  );
};

export default KeyframeAnimation;
