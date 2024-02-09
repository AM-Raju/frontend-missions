// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // Get data from local
  // const { todos } = useAppSelector((state) => state.todos);

  // Get data from server
  const { data: todos, error, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="w-full bg-primary-gradient rounded-xl p-1 ">
        {todos?.data.length < 1 && (
          <div className="bg-white p-5 rounded-md flex justify-center items-center font-bold text-2xl">
            <p>There is no task pending</p>
          </div>
        )}

        {todos?.data.length > 0 && (
          <div className="bg-white space-y-3 rounded-xl p-3 bg-opacity-20">
            {todos?.data?.map((todo: TTodo) => (
              <TodoCard key={todo?.id} todo={todo}></TodoCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
