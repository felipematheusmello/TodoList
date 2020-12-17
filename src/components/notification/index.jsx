import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const openNotification = (title, description) => {
  notification.open({
    message: title,
    description: description,
    icon: <SmileOutlined style={{ color: "#5ecc8f" }} />,
  });
};

export default openNotification;
