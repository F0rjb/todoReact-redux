import { Task } from './Task';
import { useSelector } from 'react-redux';
import { EditTask } from './EditTask';
import { Card, Stack } from '@chakra-ui/react';
export const ListTask = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      {tasks.map(({ Id, description, isDone }, key) => (
        <div key={key}>
          <Stack spacing="4" key={key}>
            <Card key="filled" variant="filled" key={key}>
              <Task description={description} key={key} isDone={isDone} />
              <EditTask key={key + 20} Id={Id} />
            </Card>
          </Stack>
          <br />
        </div>
      ))}
    </div>
  );
};
