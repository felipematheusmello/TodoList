import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
import {
  EmpetyListTitle,
  Container,
  Done,
  Incomplete,
  ContainerCheck,
} from "./tasks_style";
import ModalTask from "../modal";
const { Meta } = Card;

const TaskList = ({ isModalVisible, setIsModalVisible }) => {
  const tasks = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  return (
    <Container>
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
            {isDone ? (
              <ContainerCheck
                onClick={() => {
                  dispatch();
                }}
              >
                <Done />
              </ContainerCheck>
            ) : (
              <ContainerCheck>
                <Incomplete />
              </ContainerCheck>
            )}
          </Card>
        ))
      ) : (
        <EmpetyListTitle>You have no Tasks to do </EmpetyListTitle>
      )}
      <div>
        <ModalTask
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </Container>
  );
};

export default TaskList;
