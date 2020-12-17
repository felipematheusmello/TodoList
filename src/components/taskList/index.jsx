import { useSelector } from "react-redux";
import tasks from "../redux/reducers/task_list";
import { Card } from "antd";
import { EmpetyListTitle } from "./tasks_style";

const { Meta } = Card;

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map(({ title, subtitle, description }, key) => (
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
          </Card>
        ))
      ) : (
        <EmpetyListTitle>You have no Tasks to do </EmpetyListTitle>
      )}
    </div>
  );
};
