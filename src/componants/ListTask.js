import { Task } from './Task';

import { useDispatch, useSelector } from 'react-redux';
import { EditTask } from './EditTask';
import { Card, CheckboxIcon, Stack, Switch } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { filter, reset_filter } from './JS/actions/todoAction';
export const ListTask = () => {
  const [isChecked, setIsChecked] = useState(false);
  const tasks = useSelector(state => state.tasks);
  const [Shown, setShown] = useState(tasks);

  const dispatch = useDispatch();
  const handleChange = e => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(filter(!isChecked));

    // dispatch(FILTER(isChecked));
  };

  return (
    <div>
      <CheckboxIcon />{' '}
      <Switch isChecked={isChecked} onChange={handleChange}></Switch>
      {tasks.map(({ Id, description, isDone }, key) => (
        <div key={key}>
          <Stack spacing="4" key={key}>
            <Card variant="filled" key={key}>
              <Task description={description} key={key} isDone={isDone} />
              {/* <EditTask key={key + 20} Id={Id} /> */}
            </Card>
          </Stack>
          <br />
        </div>
      ))}
    </div>
  );
};
