import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);
  console.log("render");

  return (
    <div className="flex flex-col space-y-3 items-center h-screen justify-center">
      <h1>Count: {counter}</h1>
      <button
        className="bg-green-300 px-4 py-2 rounded"
        onClick={() => setCounter((prevState) => prevState + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-300 px-4 py-2 rounded"
        onClick={() => setCounter((prevState) => prevState - 1)}
      >
        Increment
      </button>
      <button className="bg-gray-300 w-24 px-4 py-2 rounded" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
