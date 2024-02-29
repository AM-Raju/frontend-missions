import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicSemester } from "../../../types";
import { useState } from "react";

export type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "code" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState([]);

  const { data: semesterData } = useGetAllSemestersQuery(params);
  console.log("academic Semester", semesterData);

  const tableData = semesterData?.data?.map((singleSemester) => ({
    key: singleSemester._id,
    name: singleSemester.name,
    year: singleSemester.year,
    code: singleSemester.code,
    startMonth: singleSemester.startMonth,
    endMonth: singleSemester.endMonth,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value: string, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Year",
      dataIndex: "year",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (pagination, filters, sorter, extra) => {
    // console.log("params", filters, extra);
    const filterOptions = [];
    if (extra?.action === "filter") {
      filters?.name?.forEach((item) => filterOptions.push({ name: "name", value: item }));
    }
    setParams(filterOptions);
  };

  return <Table columns={columns} dataSource={tableData!} onChange={onChange} />;
};

export default AcademicSemester;
