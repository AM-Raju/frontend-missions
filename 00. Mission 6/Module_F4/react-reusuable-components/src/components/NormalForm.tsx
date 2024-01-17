import React from "react";
import { useForm } from "react-hook-form";
import cn from "../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      className={cn("border border-red-500 max-w-md p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={cn("border border-purple-500 grid justify-items-center  gap-3", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label htmlFor="name">Name</label>
          <input
            className="block w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name">Email</label>
          <input className="block w-full" type="email" id="email" {...register("email")} />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name">Password</label>
          <input className="block w-full" type="password" id="password" {...register("password")} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
