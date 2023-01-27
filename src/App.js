import React from 'react';
import { ChakraProvider, theme, Stack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AddTask } from './componants/AddTask';
import { ListTask } from './componants/ListTask';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack align="center" direction="row"></Stack>
      <ColorModeSwitcher align="right" justifySelf="flex-end" />

      <ListTask />
      <Stack align="center">
        <AddTask align="center" />
      </Stack>
      <Stack />
    </ChakraProvider>
  );
}

export default App;
