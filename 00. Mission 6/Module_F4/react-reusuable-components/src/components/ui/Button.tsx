import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import cn from "../../utils/cn";

/* `px-4 py-2 bg-red-500 ${className} ${
    variant === "outline" ? "border-2 border-purple-500 bg-opacity-10" : ""
  }` */

const Button = ({ className, children, variant }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-outline";

      default:
        return "btn-solid";
    }
  };

  return <button className={cn(getVariant(variant), className)}>{children}</button>;
};

export default Button;
