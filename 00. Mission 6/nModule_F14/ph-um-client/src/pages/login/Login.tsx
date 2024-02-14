import { Button } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Pending");
    try {
      const loginInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(loginInfo).unwrap();

      const decodedUser = jwtDecode(res.data.accessToken) as TUser;

      dispatch(setUser({ user: decodedUser, token: res.data.accessToken }));

      toast.success("User logged in successfully", { id: toastId, duration: 2000 });
      navigate(`/${decodedUser?.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
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
