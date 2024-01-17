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
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name">Email</label>
          <input className="block w-full" type="email" id="email" {...register("email")} />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name">Password</label>
          <input className="block w-full" type="password" id="password" {...register("password")} />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name">Select</label>
          <select name="" id="">
            <option value="">One</option>
            <option value="">Two</option>
            <option value="">Three</option>
            <option value="">Four</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="name">Text Area</label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Checkbox
          </label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Radio
          </label>
          <input type="radio" name="" id="" />
        </div>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default NormalForm;
