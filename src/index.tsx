import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes as Switch, Navigate} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();