import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.css';
import App from './components/App/App';

import { AppProvider } from './components/hook/Context'
import {HashRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

