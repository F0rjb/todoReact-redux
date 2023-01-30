import {
  ADD_TASK,
  EDIT_TASK,
  FILTER,
  RESET_FILTER,
} from '../actionsType/actionTypes';

export const addTask = description => ({
  type: ADD_TASK,
  description,
});
export const editTask = (id, description) => ({
  type: EDIT_TASK,
  id,
  description,
});
export const filter = isDone => {
  return { type: FILTER, isDone };
};
export const reset_filter = () => {
  return { type: RESET_FILTER };
};
