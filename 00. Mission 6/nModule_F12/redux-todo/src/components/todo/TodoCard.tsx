import React from "react";
import { Button } from "../ui/button";
import { Trash2, SquarePen } from "lucide-react";
import { TTodo, deleteTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";

type TTodoCardProps = {
  todo: TTodo;
};

const TodoCard = ({ todo }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const { id, title, description } = todo;
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" />
      <p className="font-semibold">{title}</p>
      <p>Time</p>
      <p>{description}</p>
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
