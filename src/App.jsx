import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from 'views/tabPages/home/home.jsx';
import UserCenter from 'views/tabPages/userCenter/userCenter.jsx';
import userList from 'views/user/userList/userList.jsx';


export default class App extends Component {

  componentDidMount(){
    console.info('this', this);

  };
  
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/userCenter" component={UserCenter} />
        <Route path="/userList" component={userList} />
        <Switch>
          <Route path="/blog/:slug">
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
