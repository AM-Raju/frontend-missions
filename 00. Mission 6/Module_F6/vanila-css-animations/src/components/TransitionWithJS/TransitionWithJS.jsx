import React from "react";
import "./TransitionWithJS.css";

const TransitionWithJS = () => {
  const name = "PROGRAMMING HERO";

  const nameArr = name.split("");
  console.log(nameArr);
  return (
    <div className="main8">
      <div className="container8">
        {nameArr.map((item, i) => (
          <span className="alphabet" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TransitionWithJS;
