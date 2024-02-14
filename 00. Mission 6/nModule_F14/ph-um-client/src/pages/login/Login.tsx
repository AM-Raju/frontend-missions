import { Button } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

type TInputs = {
  userId: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();

  const { register, handleSubmit } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const loginInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(loginInfo).unwrap();

    const decodedUser = jwtDecode(res.data.accessToken);

    dispatch(setUser({ user: decodedUser, token: res.data.accessToken }));
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
