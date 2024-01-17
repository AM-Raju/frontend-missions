import React from "react";
import { useForm } from "react-hook-form";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="border border-red-500 max-w-4xl p-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-purple-500 grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="name">Name</label>
          <input className="block w-full" type="text" id="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input className="block w-full" type="email" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input className="block w-full" type="password" id="password" {...register("password")} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
