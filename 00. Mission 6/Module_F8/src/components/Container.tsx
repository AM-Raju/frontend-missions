import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center w-full max-w-[1260px] mx-auto px-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
