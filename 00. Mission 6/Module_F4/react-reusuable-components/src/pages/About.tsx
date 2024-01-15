import React from "react";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-96 p-10 border border-gray-300">
        <Button className="w-full" variant="outline">
          About Me Button
        </Button>
      </div>
    </div>
  );
};

export default About;
