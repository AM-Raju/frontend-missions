import { Button, Col, Divider, Row } from "antd";
import PHform from "../../../components/form/PHform";
import PHinput from "../../../components/form/PHinput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const studentDemoData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    bloogGroup: "A+",
    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

const CreateStudent = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    /* const formData = new FormData();

    formData.append("data", JSON.stringify(data));

    console.log(Object.entries(formData)); */
    console.log(data);
  };
  return (
    <Row>
      <Col span={24}>
        <PHform onSubmit={onsubmit}>
          {/* Personal Info */}
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="name.firstName" label="First Name"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="name.middleName" label="Middle Name"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="name.lastName" label="Last Name"></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="gender" label="Gender"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="deathOfBirth" label="Date of Birth"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="bloogGroup" label="Blood Group"></PHinput>
            </Col>
          </Row>
          {/* Contact Info */}
          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="email" name="email" label="Email"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="contactNo" label="Contact Number"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact Number"
              ></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="presentAddress" label="Present Address"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="permanentAddress" label="Permanent Address"></PHinput>
            </Col>
          </Row>
          {/*Guardian */}
          <Divider>Guardian Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="email" name="guardian.fatherName" label="Father Name"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="guardian.fatherOccupation" label="Occupation "></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="guardian.fatherContactNo" label="Contact Number"></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="guardian.motherName" label="Mother Name"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="guardian.motherOccupation" label="Occupation"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="guardian.motherContactNo" label="Contact Number"></PHinput>
            </Col>
          </Row>
          {/*Local Guardian */}
          <Divider>Local Guardian Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="email" name="localGuardian.name" label="Name"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="localGuardian.occupation" label="Occupation "></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="localGuardian.contactNo" label="Contact Number"></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="localGuardian.address" label="Address"></PHinput>
            </Col>
          </Row>
          {/*Academic Info. */}
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="email" name="admissionSemester" label="Admission Semester"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="academicDepartment" label="Academic Department "></PHinput>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Row>
  );
};

export default CreateStudent;
