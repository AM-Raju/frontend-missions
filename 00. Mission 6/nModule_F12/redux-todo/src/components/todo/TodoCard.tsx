import React from "react";
import { Button } from "../ui/button";
import { Trash2, SquarePen } from "lucide-react";
import { TTodo, deleteTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";

type TTodoCardProps = {
  todo: TTodo;
};

const TodoCard = ({ todo }: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  const { id, title, priority, description, isCompleted } = todo;

  const handleToggleComplete = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input onChange={handleToggleComplete} type="checkbox" />
      <p className="font-semibold flex-1 ml-3">{title}</p>
      <div className="flex-1 flex  items-center gap-3">
        <div
          className={`size-3 rounded-full 
        ${priority === "low" ? "bg-green-500" : null} 
        ${priority === "medium" ? "bg-yellow-500" : null} 
        ${priority === "high" ? "bg-red-500" : null} 
        `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-7">
        <Button onClick={() => dispatch(deleteTodo(id))} className="bg-red-500">
          <Trash2 />
        </Button>
        <Button className="bg-[#5c53fe]">
          <SquarePen />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
