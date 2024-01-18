import React from "react";
import NormalForm from "../components/NormalForm/NormalForm";
import Container from "../components/ui/Container";
import { Form, FormSection, FormSubmit } from "../components/ReusableForm";
import { FieldValues, useForm } from "react-hook-form";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      {/* <NormalForm></NormalForm> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <div className="w-full max-w-md">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
};

export default Profile;
