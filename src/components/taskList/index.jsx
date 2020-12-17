import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "antd";
import {
  EmpetyListTitle,
  Container,
  Incomplete,
  ContainerCheck,
  Close,
  PopUp,
} from "./tasks_style";
import ModalTask from "../modal";
import TaskForm from "../form";

import { finishTask, removeTask } from "../redux/actions/taskList";
const { Meta } = Card;

const TaskList = ({ isModalVisible, setIsModalVisible }) => {
  const tasks = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Container>
        <div style={{ marginBottom: "10px" }}>
          <ModalTask
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          >
            <TaskForm />
          </ModalTask>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
        </div>
        {tasks.length > 0 ? (
          tasks.map(({ title, subtitle, description }, key) => (
            <div key={key}>
              <PopUp
                title="Are you sure？"
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  const filtered_list = tasks.filter(
                    (task) => task.title !== title
                  );
                  dispatch(removeTask(filtered_list));
                }}
              >
                <Close />
              </PopUp>

              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="task"
                    src="https://782020.smushcdn.com/1469326/wp-content/uploads/2018/06/aaron-burden-123584-unsplash.jpg?lossy=1&strip=1&webp=1"
                  />
                }
              >
                <Meta title={title} />
                <h2>{subtitle}</h2>
                <p>{description}</p>

                <ContainerCheck
                  onClick={() => {
                    const filtered_list = tasks.filter(
                      (task) => task.title !== title
                    );
                    dispatch(removeTask(filtered_list));

                    dispatch(
                      finishTask({
                        title: title,
                        subtitle: subtitle,
                        description: description,
                        isDone: true,
                      })
                    );
                  }}
                >
                  <Incomplete />
                </ContainerCheck>
              </Card>
            </div>
          ))
        ) : (
          <EmpetyListTitle>You have no Tasks to do </EmpetyListTitle>
        )}
      </Container>
    </>
  );
};

export default TaskList;
