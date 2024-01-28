import useScrollHook from "@/hooks/useScrollHook";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollHook();
  /*  const componentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0, 1]); */

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 col-span-12 h-[415px] rounded-2xl "
    ></motion.div>
  );
};

export default BatteryReplacement;
