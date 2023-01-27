import {
  Alert,
  AlertIcon,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const Task = props => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <CardHeader>
        <Heading size="md">{props.description}</Heading>
      </CardHeader>
      <CardBody>
        {props.isDone ? (
          <Alert status="success" variant="solid">
            <AlertIcon />
            Good Job{' '}
          </Alert>
        ) : (
          <Alert status="warning" variant="solid">
            <AlertIcon /> DO IT{' '}
          </Alert>
        )}
      </CardBody>
    </div>
  );
};
