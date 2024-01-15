import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

/* `px-4 py-2 bg-red-500 ${className} ${
    variant === "outline" ? "border-2 border-purple-500 bg-opacity-10" : ""
  }` */

type TRef = HTMLButtonElement;

type TVariant = "solid" | "ghost" | "outline";

type TButtonOptions = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, children, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-outline";

        default:
          return "btn-solid";
      }
    };

    return (
      <button {...rest} ref={ref} className={cn(getVariant(variant), className)}>
        {children}
      </button>
    );
  }
);

export default Button;
