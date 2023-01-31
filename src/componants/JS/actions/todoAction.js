import {
  ADD_TASK,
  EDIT_TASK,
  FILTER,
  DELETE_TASK,
  RESET_FILTER,
} from '../actionsType/actionTypes';

export const addTask = description => ({
  type: ADD_TASK,
  description,
});
export const editTask = (id, description, isDoneEdit) => ({
  type: EDIT_TASK,
  payload: { id, description, isDoneEdit },
});
export const filter = isDone => {
  return { type: FILTER, isDone };
};
export const reset_filter = () => {
  return { type: RESET_FILTER };
};
export const delete_task = Id => {
  return {
    type: DELETE_TASK,
    payload: Id,
  };
};
