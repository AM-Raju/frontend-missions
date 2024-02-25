import { Button, Row } from "antd";
import React from "react";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHform from "../../components/form/PHform";
import PHinput from "../../components/form/PHinput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  // const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log("Form submit", data);

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
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHform onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHinput type="text" name="userId" label="User Id"></PHinput>
        <PHinput type="text" name="password" label="Password"></PHinput>
        <Button htmlType="submit">Submit</Button>
      </PHform>
    </Row>
  );
};

export default Login;
