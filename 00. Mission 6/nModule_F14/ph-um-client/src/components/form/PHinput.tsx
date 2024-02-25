import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHinput = ({ type, name, label }: TPHInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller name={name} render={({ field }) => <Input {...field} type={type} id={name} />} />
    </div>
  );
};

export default PHinput;
