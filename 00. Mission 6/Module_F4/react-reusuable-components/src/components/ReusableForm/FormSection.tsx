import React, { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid justify-items-center  gap-3", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
