import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store';
import axios from 'axios';

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    //Here you can make a toast or show a fancier message
    alert(error.response.data.message);
    return Promise.reject(error);
});

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   </Provider>   
  ), document.getElementById('root'));




