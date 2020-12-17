import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
import {
  EmpetyListTitle,
  Container,
  Incomplete,
  ContainerCheck,
} from "./tasks_style";
import ModalTask from "../modal";
import { finishTask } from "../redux/actions/taskList";
const { Meta } = Card;

const TaskList = ({ isModalVisible, setIsModalVisible }) => {
  const tasks = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <div style={{ marginBottom: "10px" }}>
          <ModalTask
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
        {tasks.length > 0 ? (
          tasks.map(({ title, subtitle, description, isDone }, key) => (
            <Card
              key={key}
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
          ))
        ) : (
          <EmpetyListTitle>You have no Tasks to do </EmpetyListTitle>
        )}
      </Container>
    </>
  );
};

export default TaskList;
