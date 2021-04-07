import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { CounterProvider } from './example/CounterContext';
import ThemeProvider from './exerciseContext/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ChakraProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
