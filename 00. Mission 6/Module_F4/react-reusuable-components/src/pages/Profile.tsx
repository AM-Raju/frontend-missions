import Container from "../components/ui/Container";
import { Form, FormSection, FormSubmit, Input } from "../components/ReusableForm";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      {/* <NormalForm></NormalForm> */}
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
            id="email"
          ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
};

export default Profile;
