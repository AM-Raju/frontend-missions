import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-6 items-center border px-32 py-24 bg-gray-100">
        <button className="bg-green-500 px-4 py-2 rounded-lg font-semibold ">Increment</button>
        <h1 className="text-3xl">0</h1>
        <button className="bg-red-500 px-4 py-2 rounded-lg font-semibold ">Decrement</button>
      </div>
    </div>
  );
}

export default App;
