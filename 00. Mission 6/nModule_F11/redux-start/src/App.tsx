import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-6 items-center border px-32 py-24 bg-gray-100">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 px-4 py-2 rounded-lg font-semibold "
        >
          Increment
        </button>
        <h1 className="text-3xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 px-4 py-2 rounded-lg font-semibold "
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
