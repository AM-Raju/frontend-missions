import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="w-full bg-primary-gradient rounded-xl p-1 ">
        {/* <div className="bg-white p-5 rounded-md flex justify-center items-center font-bold text-2xl">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white space-y-3 rounded-xl p-3 bg-opacity-20">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
