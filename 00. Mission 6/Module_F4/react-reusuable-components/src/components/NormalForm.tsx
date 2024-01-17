import React from "react";
import { useForm } from "react-hook-form";
import cn from "../utils/cn";
import Button from "./ui/Button";
import { z } from "zod";

const ZodSignUPSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Too short"),
});

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        className={cn(" grid justify-items-center  gap-3", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <p className="text-xs text-red-500">This field is required</p>}
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
      <div
        className={cn(" grid justify-items-center  gap-3", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end my-8">
          <Button className="w-full md:w-fit" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
