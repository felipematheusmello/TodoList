import { ADD_TASK, RMV_TASK, DN_TASK } from "./types";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    newTask,
  };
};

export const removeTask = (filteredTasks) => {
  return {
    type: RMV_TASK,
    filteredTasks,
  };
};

export const finishTask = (finishedTask) => {
  return {
    type: DN_TASK,
    finishedTask,
  };
};

export const unmakeTaske = (filteredTaskList) => {
  return {
    type: RMV_TASK,
    filteredTaskList,
  };
};
