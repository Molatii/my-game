import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
//import Mylayout from './components/UI/mylayout';
import reportWebVitals from './reportWebVitals';
//import register from './components/register';

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

);

reportWebVitals();
