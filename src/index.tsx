
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Flex, Heading } from 'rebass';

import preset from '@rebass/preset-material';

import Context from './candidates/context';
import Mobx from './candidates/mobx';
import Overmind from './candidates/overmind';
import {ElementConstructor as ReduxElement } from './Todo-Redux';
import Zustand from './candidates/zustand';

function App() {
  return (
    <Box>
      <Flex mx={-2}>
        <Box width={1 / 2} px={2}>
          <Heading>Mobx</Heading>
          <Mobx />
        </Box>
        <Box width={1 / 2} px={2}>
          <Heading>Zustand</Heading>
          <Zustand />
        </Box>
      </Flex>
      <Flex mx={-2}>
        <Box width={1 / 2} px={2}>
          <Heading>Overmind.js</Heading>
          <Overmind />
        </Box>
        <Box width={1 / 2} px={2}>
          <Heading>Context</Heading>
          <Context />
        </Box>
      </Flex>
      <Flex mx={-2}>
        <Box width={1 / 2} px={2}>
          <Heading>Redux</Heading>
          <ReduxElement></ReduxElement>
        </Box>
        <Box width={1 / 2} px={2}>
          <Heading></Heading>
     
        </Box>
      </Flex>
    </Box>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={preset}>
    <App />
  </ThemeProvider>,
  rootElement
);
