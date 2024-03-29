import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1250px] mx-auto">{children}</div>;
};

export default Container;
