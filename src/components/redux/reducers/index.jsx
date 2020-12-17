import { combineReducers } from "redux";
import taskList from "./task_list";
import finishedList from "./finished_list";
export default combineReducers({ taskList, finishedList });
