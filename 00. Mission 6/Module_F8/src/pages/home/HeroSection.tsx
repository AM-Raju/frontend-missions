import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)]  place-content-center">
      <div>
        <h1 className="text-5xl lg:text-8xl font-extrabold text-nowrap">
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="max-w-[50ch] mt-10 mb-5 text-dark-gray">
          Welcome to <span className="text-primary-foreground font-semibold"> iRepair </span>, your
          one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold"> Macbook repairs </span> and
          diagnostics.
        </p>
        <Button>Book and Service</Button>
      </div>
      <div className="w-3/4 lg:w-full mx-auto">
        <img className="-rotate-[35deg] h-[95%] object-contain" src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
