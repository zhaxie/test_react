/*
 * @Date         : 2021-01-13 11:20:24
 * @LastEditors  : cxx
 * @LastEditTime : 2021-01-23 14:53:57
 * @FilePath     : \test_react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from 'App';
import reportWebVitals from './reportWebVitals';

import 'static/css/animate.css';
import 'static/css/xx-base.css';

// import {IndexRoute } from "react-router";
import { BrowserRouter, Route, useParams, Switch, Link } from "react-router-dom";

import Home from './views/tabPages/home/home.jsx';
import UserCenter from './views/tabPages/userCenter/userCenter.jsx';


function BlogPost() {
  let { slug } = useParams();
  return <Link to="/userCenter">{slug}</Link>;
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/userCenter" component={UserCenter} />
    <Switch>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
