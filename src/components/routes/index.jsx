import { Switch, Route } from "react-router-dom";
import TaskList from "../taskList";
const Routes = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <Switch>
      <Route exact path="/">
        <TaskList
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
