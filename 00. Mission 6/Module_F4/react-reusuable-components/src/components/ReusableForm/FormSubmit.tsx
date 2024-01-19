import React, { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";
import Button from "../ui/Button";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
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
  );
};
