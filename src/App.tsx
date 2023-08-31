import React from 'react';

import { ChakraProvider, Code, Stack } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <Stack direction='row'>
        <Code children='console.log(welcome)' />
        <Code colorScheme='red' children="var chakra = 'awesome!'" />
        <Code colorScheme='yellow' children='npm install chakra' />
      </Stack>
    </ChakraProvider>
  )
}

export default App;
