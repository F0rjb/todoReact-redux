import { CloseButton } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { delete_task } from './JS/actions/todoAction';

export const DeleteTodo = Id => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(delete_task(Id));
  return (
    <div>
      <CloseButton onClick={handleClick} />
    </div>
  );
};
