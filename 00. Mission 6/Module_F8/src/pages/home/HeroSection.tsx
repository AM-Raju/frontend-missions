import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-2 h-[calc(100vh-64px)]  place-content-center">
      <div>
        <h1 className="text-8xl font-extrabold">
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p>
          Welcome to <span> iRepair </span>, your one-stop place for all kinds of{" "}
          <span> Macbook repairs </span> and diagnostics.
        </p>
        <Button>Book and Service</Button>
      </div>
      <div>
        <img src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
