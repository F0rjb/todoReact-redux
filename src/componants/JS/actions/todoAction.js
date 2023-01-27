import { type } from '@testing-library/user-event/dist/types/utility';
import { tasks } from '../../data';
import { ADDTODO, EDITTASK, FILTER } from '../actionsType/actionTypes';

export const addtodo = () => {
  return { type: ADDTODO, payload: tasks };
};
export const edittask = () => {
  return { type: EDITTASK, payload: tasks };
};
export const filter = () => {
  return { type: FILTER, payload: tasks };
};
