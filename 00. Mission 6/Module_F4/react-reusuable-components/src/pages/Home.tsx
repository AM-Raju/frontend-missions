import React from "react";
import Container from "../components/ui/Container";

const Home = () => {
  return (
    <Container>
      <h1 className="bg-red-500">Home</h1>
      <div className="flex space-x-3 justify-center h-screen items-center">
        <button className="bg-purple-500 px-3 py-2 rounded-md">This is a button</button>
        <button className="bg-purple-500 px-3 py-2 rounded-md">This is a button</button>
      </div>
    </Container>
  );
};

export default Home;
