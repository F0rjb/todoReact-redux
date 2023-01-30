import { tasks } from '../../data';
import {
  FILTER,
  ADDTODO,
  EDITTASK,
  RESET_FILTER,
  ADD_TASK,
  EDIT_TASK,
} from '../actionsType/actionTypes';
const initstate = {
  tasks: tasks,
  isDone: false,
};

export function taskReducer(state = initstate, action) {
  switch (action.type) {
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id
            ? { ...task, description: action.description }
            : task
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            Id: state.tasks.length + 1,
            description: action.description,
            isDone: false,
          },
        ],
      };

    case FILTER:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.isDone === action.isDone).length
          ? state.tasks.filter(task => task.isDone === action.isDone)
          : state.tasks,
      };
    case RESET_FILTER:
      return {
        ...state,
        task: initstate,
      };
    default:
      return state;
  }
}
