import { ADD_TASK, RMV_TASK } from "../actions/types";
const defaultState = [];

const tasks = (state = defaultState, { type, newTask, filteredTasks }) => {
  switch (type) {
    case ADD_TASK:
      return [...state, newTask];

    case RMV_TASK:
      return filteredTasks;

    default:
      return state;
  }
};

export default tasks;
