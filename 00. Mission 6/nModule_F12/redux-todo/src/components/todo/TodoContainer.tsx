import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="w-full bg-red-500 rounded-xl p-5 space-y-3">
        {/* <div className="bg-white p-5 rounded-md flex justify-center items-center font-bold text-2xl">
          <p>There is no task pending</p>
        </div> */}
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;
