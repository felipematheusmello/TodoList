import { DN_TASK, RMV_TASK } from "../actions/types";
const defaultState = [];
const finishedList = (
  state = defaultState,
  { type, finishedTask, filteredTaskList }
) => {
  switch (type) {
    case DN_TASK:
      return [state, ...finishedTask];

    case RMV_TASK:
      return filteredTaskList;

    default:
      return state;
  }
};

export default finishedList;
