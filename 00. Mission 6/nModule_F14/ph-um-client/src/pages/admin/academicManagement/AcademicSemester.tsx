import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicSemester, TQueryParam } from "../../../types";
import { useState } from "react";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "code" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: semesterData, isLoading, isFetching } = useGetAllSemestersQuery(params);
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
      key: "name",
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
      key: "year",
      dataIndex: "year",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (_pagination, filters, _sorter, extra) => {
    // console.log("params", filters, extra);
    const queryParams: TQueryParam[] = [];
    if (extra?.action === "filter") {
      filters?.name?.forEach((item) => queryParams.push({ name: "name", value: item }));
    }
    setParams(queryParams);
  };

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData!} onChange={onChange} />
  );
};

export default AcademicSemester;
