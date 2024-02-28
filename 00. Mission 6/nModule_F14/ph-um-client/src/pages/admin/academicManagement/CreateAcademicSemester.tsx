import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
// import PHinput from "../../../components/form/PHinput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { nameOptions } from "../../../constants/semester";
import { months } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAcademicSemesterSchema } from "../../../schemas/createAcademicSemesterSchema";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TAcademicSemester, TResponse } from "../../../types";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const monthOptions = months.map((month) => ({
  value: month,
  label: month,
}));

const CreateAcademicSemester = () => {
  const [createAcademicSemester] = useCreateAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    // console.log(data);

    const name = nameOptions[Number(data.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    // console.log(semesterData);

    try {
      const res = (await createAcademicSemester(semesterData)) as TResponse<TAcademicSemester>;

      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Semester created successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHform onSubmit={onSubmit} resolver={zodResolver(createAcademicSemesterSchema)}>
          {/* <PHinput type="text" name="name" label="Name" />
          <PHinput type="text" name="year" label="Year" /> */}
          <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect label="Start Month" name="startMonth" options={monthOptions}></PHSelect>
          <PHSelect label="End Month" name="endMonth" options={monthOptions}></PHSelect>
          <Button htmlType="submit">Create A. Semester </Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
