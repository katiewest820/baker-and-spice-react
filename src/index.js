import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT, 
      autoClose: 2500,
      className: css({
        background: "#28b8be",
        fontWeight: "bold"
      })
    });
    return Promise.reject(error);
});

ReactDOM.render(<ToastContainer/>, document.getElementById('toast'));
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   </Provider>   
  ), document.getElementById('root'));




