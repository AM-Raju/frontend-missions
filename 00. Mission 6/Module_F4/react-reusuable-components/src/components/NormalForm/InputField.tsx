import React from "react";
import { useFormContext } from "react-hook-form";

const InputField = () => {
  const { register, watch } = useFormContext();
  console.log("Watch something", watch("something"));

  return (
    <div>
      <input type="text" {...register("something")} />
    </div>
  );
};

export default InputField;
