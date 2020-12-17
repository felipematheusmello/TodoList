import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const openNotification = (title, description) => {
  notification.open({
    message: title,
    description: description,
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};

export default openNotification;
