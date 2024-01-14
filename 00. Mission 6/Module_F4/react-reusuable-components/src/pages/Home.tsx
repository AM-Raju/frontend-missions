import React from "react";
import Container from "../components/ui/Container";

const Home = () => {
  return (
    <Container>
      <h1 className="bg-red-500">Home</h1>
      <h2 className="bg-red-500">Home</h2>
      <h3 className="bg-red-500">Home</h3>
      <div className="flex space-x-3 justify-center h-screen items-center">
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-danger">This is a button</button>
      </div>
    </Container>
  );
};

export default Home;
