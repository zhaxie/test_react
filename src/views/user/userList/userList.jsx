import React, { Component } from 'react';
import moduleCss from "./userList.module.scss";


import ListWrap from 'components/listWrap/listWrap.jsx';

export default class UserList extends Component {
    render() {
        return (
            <ListWrap
                listContent={() => {
                    return <div className={`${moduleCss['list-modules']}`}>
                        <div className={`ma-20 overflow-hidden ${moduleCss['list-item']}`}>
                            <div className={`d-flex align-items-center my-20 ${moduleCss['top-box']}`}>
                                <div className={`col ${moduleCss['title']}`}>
                                    标题
                                </div>
                                <div className={`${moduleCss['mobile']}`}>
                                    13058124001
                                </div>
                            </div>
                            <div className={`my-20 ${moduleCss['center-box']}`}>
                                <div className={`${moduleCss['center-box-item']}`}>部门：行政部门</div>
                                <div className={`${moduleCss['center-box-item']}`}>部门：行政部门</div>
                            </div>
                            <div className={`d-flex align-items-center justify-content-end my-20 ${moduleCss['footer-box']}`}>
                                <div className={`px-30 ${moduleCss['footer-btn']}`}>
                                    按钮
                                </div>
                            </div>
                        </div>
                    </div>
                }}>
            </ListWrap>
        );
    }
}

