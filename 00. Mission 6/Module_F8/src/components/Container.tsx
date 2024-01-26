import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1240px] mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
