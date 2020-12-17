import { Switch, Route } from "react-router-dom";
import TaskList from "../taskList";
import Header from "../header";
const Routes = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <TaskList
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
