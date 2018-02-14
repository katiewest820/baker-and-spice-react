import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store';
import axios from 'axios';
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request happening')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    debugger
    return response;
  }, function (error) {
    alert(error.data.message)
    debugger
    // Do something with response error
    return Promise.reject(error);
  });

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   </Provider>   
  ), document.getElementById('root'));




