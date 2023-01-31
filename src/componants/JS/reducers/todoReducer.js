import { tasks } from '../../data';
import {
  FILTER,
  ADDTODO,
  EDITTASK,
  RESET_FILTER,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from '../actionsType/actionTypes';
const initstate = {
  tasks: tasks,
  isDone: false,
};

export function taskReducer(state = initstate, action) {
  switch (action.type) {
    case EDIT_TASK:
      console.log(action);
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.Id === action.payload.id
            ? {
                ...task,
                description: action.payload.description,
                isDone: action.payload.isDone,
              }
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
      console.log(action);
      return {
        ...state,
        isDone: action.isDone,
      };
    //   ...state,
    //   tasks: state.tasks.filter(task => task.isDone === action.isDone).length
    //     ? state.tasks.filter(task => task.isDone === action.isDone)
    //     : state.tasks,
    // };
    case RESET_FILTER:
      return {
        ...state,
        task: initstate,
      };
    case DELETE_TASK:
      console.log(action);
      return {
        ...state,
        tasks: state.tasks.filter(task => task.Id !== action.payload.Id),
      };
    default:
      return state;
  }
}
