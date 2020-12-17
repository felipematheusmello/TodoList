import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import {
  Container,
  EmpetyListTitle,
  Done,
  ContainerCheck,
  Close,
  PopUp,
} from "./tasks_style";
import { unmakeTaske, addTask } from "../redux/actions/taskList";
import openNotification from "../notification";

const { Meta } = Card;
const DoneTaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.finishedList);
  return (
    <Container>
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
                dispatch(unmakeTaske(filtered_list));
                openNotification("Good job!", "Your task was removed");
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
                  src="https://www.zoho.com/sites/default/files/c-apps-taskzdone.jpg"
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
                  dispatch(
                    addTask({
                      title: title,
                      subtitle: subtitle,
                      description: description,
                    })
                  );
                  dispatch(unmakeTaske(filtered_list));
                  openNotification(
                    "Good job!",
                    "You put your task in tasks to complete"
                  );
                }}
              >
                <Done />
              </ContainerCheck>
            </Card>
          </div>
        ))
      ) : (
        <EmpetyListTitle>You have no done Tasks </EmpetyListTitle>
      )}
    </Container>
  );
};

export default DoneTaskList;
