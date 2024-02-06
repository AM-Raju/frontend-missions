import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-6 items-center border px-32 py-24 bg-gray-100">
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-500 px-4 py-2 rounded-lg font-semibold "
        >
          Increment By 5
        </button>
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
