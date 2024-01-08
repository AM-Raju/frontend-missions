import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <div className="flex flex-col space-y-3 items-center h-screen justify-center">
      <h1>Count: {counter}</h1>
      <button className="bg-green-300 px-4 py-2 rounded" onClick={handleIncrement}>
        Increment
      </button>
      <button className="bg-red-300 px-4 py-2 rounded" onClick={handleAsyncIncrement}>
        handleAsyncIncrement
      </button>
      <button className="bg-gray-300 w-24 px-4 py-2 rounded" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
