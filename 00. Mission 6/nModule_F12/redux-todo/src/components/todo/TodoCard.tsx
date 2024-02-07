import React from "react";
import { Button } from "../ui/button";
import { Trash2, SquarePen } from "lucide-react";

const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-7">
        <Button className="bg-red-500">
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
