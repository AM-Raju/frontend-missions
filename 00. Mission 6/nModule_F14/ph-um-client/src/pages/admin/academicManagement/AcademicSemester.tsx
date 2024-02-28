import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemestersQuery(undefined);
  console.log("academic Semester", semesterData);

  const tableData = semesterData?.data?.map((singleSemester) => ({
    name: singleSemester.name,
    year: singleSemester.year,
    code: singleSemester.code,
    startMonth: singleSemester.startMonth,
    endMonth: singleSemester.endMonth,
  }));

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            {
              text: "Yellow",
              value: "Yellow",
            },
            {
              text: "Pink",
              value: "Pink",
            },
          ],
        },
        {
          text: "Category 2",
          value: "Category 2",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
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
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Code",
      dataIndex: "code",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];

  const data: DataType[] = tableData;

  const onChange: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default AcademicSemester;
