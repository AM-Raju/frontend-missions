import { Button } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";

type TInputs = {
  userId: string;
  password: string;
};

const Login = () => {
  const [login, { data, error }] = useLoginMutation();

  console.log("data", data);
  console.log("error", error);

  const { register, handleSubmit } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    console.log(data);
    const loginInfo = {
      id: data.userId,
      password: data.password,
    };
    login(loginInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="userId">ID: </label>
        <input defaultValue="A-0001" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input defaultValue="admin123" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
