import React from "react";

const Button = ({ className }: { className: string }) => {
  return <button className={`bg-green-500 ${className}`}>Click</button>;
};

export default Button;
