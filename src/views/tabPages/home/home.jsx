/*
 * @Date         : 2021-01-13 11:27:13
 * @LastEditors  : cxx
 * @LastEditTime : 2021-01-23 16:01:28
 * @FilePath     : \test_react\src\views\tabPages\home\home.jsx
 */

import React, { Component } from 'react';
import TabBar from 'components/TabBar.jsx';
import Login from 'views/user/login/Login.jsx';
import {  NavLink } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: 0,
        };
    }

    getTableBtnList = () => {
        return [{
            title: '首页',
        }, {
            title: '个人中心'
        }];
    }

    render() {
        return (
            <div>
                <NavLink to="/blog/21212" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    BlogPost
                </NavLink>
                <div style={{ margin: '20px' }}>
                    <NavLink to="/userCenter?type=1" activeClassName="hurray">
                        跳转到个人中心
                    </NavLink>
                </div>
                <Login></Login>
                <TabBar
                    tabBtnList={this.getTableBtnList}
                    onChange={this.hanldeTabItemChange}
                ></TabBar>
            </div>
        )
    }
}

