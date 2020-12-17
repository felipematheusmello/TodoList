import { Switch, Route } from "react-router-dom";
import TaskList from "../taskList";
import Header from "../header";
import DoneTaskPage from "../../pages/doneTaskPage";

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

        <Route path="/donetask">
          <DoneTaskPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
