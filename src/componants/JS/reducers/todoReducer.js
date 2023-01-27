import { tasks } from '../../data';
import { FILTER, ADDTODO, EDITTASK } from '../actionsType/actionTypes';
const initstate = {
  tasks: tasks,
};

export function taskReducer(state = initstate, action) {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            Id: state.tasks.length + 1,
            description: action.payload.description,
            isDone: action.payload.isDone,
          },
        ],
      };
    case FILTER:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.isDone === action.isDone),
      };
    case EDITTASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.Id === action.id) {
            return {
              ...task,
              ...action.updates,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}
