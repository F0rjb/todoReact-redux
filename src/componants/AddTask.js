import {
  Button,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './JS/actions/todoAction';

export const AddTask = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    dispatch(addTask(description));
    setDescription('');
    onClose();
  };
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Add Task{' '}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack align="center" direction="row">
              <Input
                variant="filled"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={5}>
              <Button onClick={handleAddTask}>Add</Button>
              <Button onClick={onClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
