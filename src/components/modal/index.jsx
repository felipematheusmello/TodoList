import { Modal, Button } from "antd";
import TaskForm from "../form";

const ModalTask = ({ isModalVisible, setIsModalVisible }) => {
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TaskForm />
      </Modal>
    </>
  );
};

export default ModalTask;
