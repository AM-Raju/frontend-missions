import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import macbook from "@/assets/images/macbook-exposed.png";
import { easeInOut } from "framer-motion/dom";

const HeroSection = () => {
  const intro = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: {
      opacity: 0,
      y: -500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const laptop = {
    initial: { y: 0, rotate: 0, scale: 5 },
    animate: {
      y: 20,
      rotate: -30,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: easeInOut,
        },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)]  place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="text-5xl lg:text-8xl font-extrabold text-nowrap"
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p variants={introChildren} className="max-w-[50ch] mt-10 mb-5 text-dark-gray">
            Welcome to <span className="text-primary-foreground font-semibold"> iRepair </span>,
            your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold"> Macbook repairs </span> and
            diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book and Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
