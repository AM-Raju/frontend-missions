import React from "react";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <Button className="bg-green-500" outline={true}>
        About Me Button
      </Button>
    </div>
  );
};

export default About;
