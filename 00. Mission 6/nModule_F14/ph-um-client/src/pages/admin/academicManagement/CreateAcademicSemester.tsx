import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import PHinput from "../../../components/form/PHinput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <PHform onSubmit={onSubmit}>
      <PHinput type="text" name="name"></PHinput>
      <Button htmlType="submit">Submit </Button>
    </PHform>
  );
};

export default CreateAcademicSemester;
