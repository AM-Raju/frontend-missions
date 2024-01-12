const wrapperFunction = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

const addOne = (num) => {
  return num + 1;
};

console.log("First time ", addOne(2));

const addOneAndDouble = wrapperFunction(addOne);

console.log(addOneAndDouble(10));

console.log("Second Time ", addOne(8));
