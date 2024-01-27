import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import macbook from "@/assets/images/macbook-exposed.png";

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
        delayChildren: 0.5,
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

  return (
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
          Welcome to <span className="text-primary-foreground font-semibold"> iRepair </span>, your
          one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold"> Macbook repairs </span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book and Service</Button>
        </motion.div>
      </motion.div>
      <div className="w-3/4 lg:w-full mx-auto">
        <img className="-rotate-[35deg] h-[95%] object-contain" src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
