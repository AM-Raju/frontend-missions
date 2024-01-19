import React from "react";

/* import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  email: string;
}

type TInputProps = {
  label: string;
  register: UseFormRegister<IFormValues>;
  errors: {
    [key: string]: {
      message: string;
    };
  };
  type: string;
  id: string;
}; */

export const Input = ({ label, register, errors, type, id }) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="name">{label}</label>
      <input type={type} id={id} {...register} />
      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
    </div>
  );
};
