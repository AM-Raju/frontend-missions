import React from "react";
import { FieldValues, useForm, FormProvider } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, ZodSignUPSchema } from "./validation";
import InputField from "./InputField";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(ZodSignUPSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  console.log("watch name", watch("name"));
  console.log("watch email", watch("email"));

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;

  return (
    <FormProvider {...methods}>
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
            <label htmlFor="name">Something</label>
            <InputField></InputField>
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="name">Email</label>
            <input className="block w-full" type="email" id="email" {...register("email")} />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="name">Password</label>
            <input
              className="block w-full"
              type="password"
              id="password"
              {...register("password", { minLength: 8 })}
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
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
    </FormProvider>
  );
};

export default NormalForm;
