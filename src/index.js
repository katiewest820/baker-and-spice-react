import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store';
import axios from 'axios';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   </Provider>   
  ), document.getElementById('root'));




