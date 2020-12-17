import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskList";
import openNotification from "../notification";

const tailLayout = {
  wrapperCol: { offset: 11, span: 16 },
};
const TaskForm = () => {
  let dispatch = useDispatch();
  const onFinish = (values) => {
    values = { ...values, isDone: false };
    console.log("Success:", values);

    dispatch(addTask(values));
    openNotification("Nice!", "Your new task was added sucesfully");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your Title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Subtitle" name="subtitle" rules={[{ required: false }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          { required: true, message: "Please input something on description" },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TaskForm;
