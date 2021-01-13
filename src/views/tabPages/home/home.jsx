/*
 * @Date         : 2021-01-13 11:27:13
 * @LastEditors  : cxx
 * @LastEditTime : 2021-01-13 17:56:25
 * @FilePath     : \test_react\src\views\tabPages\home\home.jsx
 */

import React, { Component } from 'react';
import homeCss from 'views/tabPages/home/home.module.css';
import TabBar from 'components/TabBar.jsx';
import Login from 'views/user/login/Login.jsx';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            account: 0,
        };
    }

    handleAddAccount = (account) => {
        this.setState({
            account: account + 2
        });
    }

    hanldeTabItemChange = (currentTabIndex) => {
        console.info('currentTabIndex', currentTabIndex);
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
                <div
                    className={"d-flex align-items-center justify-content-center" + homeCss.home}
                    style={{ fontSize: '20px', color: 'blue' }}
                    onClick={() => this.handleAddAccount(this.state.account)}>
                    {'数量：' + this.state.account}
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

