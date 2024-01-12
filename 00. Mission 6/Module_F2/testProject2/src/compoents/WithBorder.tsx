const WithBorder = (WrappedComponent) => {
  return (props) => (
    <div className=" border-2 border-purple-500 rounded-full">
      <WrappedComponent></WrappedComponent>
    </div>
  );
};

export default WithBorder;
