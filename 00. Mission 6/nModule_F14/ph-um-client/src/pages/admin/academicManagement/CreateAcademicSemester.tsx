import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import PHinput from "../../../components/form/PHinput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const options = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Spring",
  },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHform onSubmit={onSubmit}>
          <PHinput type="text" name="name" label="Name" />
          <PHinput type="text" name="year" label="Year" />
          <PHSelect label="Name" name="semester" options={options}></PHSelect>
          <Button htmlType="submit">Create A. Semester </Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
