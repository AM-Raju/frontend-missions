import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodosMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  /* For local state management */
  // const dispatch = useAppDispatch();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Add data to the server
  const [addTodo, { data, isError, isLoading, isSuccess }] = useAddTodosMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).slice(2, 9);

    // console.log({ task, description });
    const taskDetails = {
      // id: randomString,
      title: task,
      description: description,
      // priority
    };

    /* For local state management */
    // dispatch(addTodo(taskDetails));

    // For adding data to the server
    addTodo(taskDetails);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient">Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Make changes to your task here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
