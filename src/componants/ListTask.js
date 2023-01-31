import { Task } from './Task';

import { useDispatch, useSelector } from 'react-redux';
import { EditTask } from './EditTask';
import { Card, CheckboxIcon, HStack, Stack, Switch } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { filter, reset_filter } from './JS/actions/todoAction';
import { DeleteTodo } from './deleteTodo';
export const ListTask = () => {
  const [isChecked, setIsChecked] = useState(false);
  const tasks = useSelector(state => state.tasks);
  const isDonestate = useSelector(state => state.isDone);
  const [DoneValue, setDoneValue] = useState('');

  // const [Shown, setShown] = useState(tasks);
  const filterTasks = tasks.filter(tasks =>
    DoneValue === 'Done'
      ? tasks.isDone === true
      : DoneValue === 'NotDone'
      ? tasks.isDone === false
      : tasks
  );
  const dispatch = useDispatch();
  const handleChange = e => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(filter(!isChecked));
    console.log(filterTasks);
    // dispatch(FILTER(isChecked));
  };
  const handleSelect = e => {
    e.preventDefault();
    setDoneValue(e.target.value);
    dispatch(filter(e.target.value));
  };

  return (
    <div>
      <HStack spacing="24px">
        <CheckboxIcon />{' '}
        <select name="Filter" onChange={handleSelect} id="cars">
          <option value="Done">Done</option>
          <option value="NotDone">Not Done</option>
          <option value="All">All</option>
        </select>
      </HStack>
      {/* <Switch isChecked={isChecked} onChange={handleChange}></Switch> */}
      {filterTasks.map(({ Id, description, isDone }, key) => (
        <div key={key}>
          <Stack spacing="4" key={key}>
            <Card variant="filled" key={key}>
              <DeleteTodo Id={Id} />

              <Task description={description} key={key} isDone={isDone} />

              <EditTask key={key + 20} Id={Id} description={description} />
            </Card>
          </Stack>
          <br />
        </div>
      ))}
    </div>
  );
};
