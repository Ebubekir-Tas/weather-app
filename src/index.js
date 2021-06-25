import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/theme';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
