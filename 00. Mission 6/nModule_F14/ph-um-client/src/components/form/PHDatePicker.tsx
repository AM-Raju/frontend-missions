import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TPHDatePickerProps = {
  name: string;
  label?: string;
};

const PHDatePicker = ({ name, label }: TPHDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} id={name} size="large" style={{ width: "100%" }}></DatePicker>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
