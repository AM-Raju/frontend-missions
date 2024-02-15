import React from "react";
import { useFormContext } from "react-hook-form";

const PHinput = ({ type, name, label, defaultValue }) => {
  const { register } = useFormContext();

  return (
    <>
      {label ? label : null}
      <input type={type} id={name} defaultValue={defaultValue} {...register(name)} />
    </>
  );
};

export default PHinput;
