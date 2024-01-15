import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import cn from "../../utils/cn";

/* `px-4 py-2 bg-red-500 ${className} ${
    variant === "outline" ? "border-2 border-purple-500 bg-opacity-10" : ""
  }` */

const Button = ({ className, children, outline }: { className: string }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-red-500",
        {
          "border-2 border-purple-500 bg-opacity-10": outline,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
