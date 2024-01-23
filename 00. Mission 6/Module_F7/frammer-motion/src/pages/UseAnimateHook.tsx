import { useAnimate } from "framer-motion";
import React, { useEffect } from "react";

const UseAnimateHook = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { rotate: 45, opacity: 0.75 }],
      [scope.current, { rotate: 90, opacity: 0.5 }],
      [scope.current, { rotate: 135, opacity: 0.25 }],
      [scope.current, { rotate: 180, opacity: 0 }],
      [scope.current, { rotate: 225, opacity: 1 }],
      [scope.current, { rotate: 270, x: 200 }],
      [scope.current, { rotate: 315, y: 200 }],
    ]);
  }, []);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <div ref={scope} className="size-44 bg-indigo-500 rounded-lg flex flex-wrap gap-5"></div>
    </div>
  );
};

export default UseAnimateHook;
