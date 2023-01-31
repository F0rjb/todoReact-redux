import {
  Button,
  FormLabel,
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
  Textarea,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from './JS/actions/todoAction';

export const EditTask = ({ Id, description, isDone }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [flag, setFlag] = useBoolean();
  const dispatch = useDispatch();

  // const task = useSelector(state => state.tasks.find(task => task.id === Id));
  const [statedescription, setstateDescription] = useState(description);
  const [stateswitch, setswitch] = useState(isDone);
  const handleChange = e => setstateDescription(e.target.value);
  const handleSwitchChange = e => {
    setswitch(!stateswitch);
  };
  const handleEditTask = () => {
    dispatch(editTask(Id, statedescription, stateswitch));
    onClose();
  };
  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Edit Task{' '}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack align="center" direction="row">
              <Input
                variant="filled"
                type="text"
                value={statedescription}
                onChange={handleChange}
                placeholder="Description"
              />
              <FormLabel htmlFor="isFocusable">Finished?</FormLabel>
              <Switch
                size="lg"
                value={stateswitch}
                onChange={handleSwitchChange}
              />
            </Stack>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleEditTask}>Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
