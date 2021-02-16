/*
 * @Date         : 2021-01-13 11:20:24
 * @LastEditors  : cxx
 * @LastEditTime : 2021-02-16 17:38:31
 * @FilePath     : \test_react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import reportWebVitals from './reportWebVitals';

import 'static/css/animate.css';
import 'static/css/xx-base.css';
import 'static/css/iconfont.css';

import 'static/js/globalMethods.js'; //引入全局方法

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
