import React, { Component } from 'react';
import moduleCss from "./home.module.scss";

import XxImg from 'components/global/xxImg/xxImg.jsx';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryList: this.getEntryList()
    }
  }

  getEntryList = () => {
    return [{
      iconfont: "icon-text",
      title: "用户管理",
      path: '/userList',
    }, {
      iconfont: "icon-text",
      title: "权限管理",
      path: 'authenList',
    },
    ]
  };

  handleOpenToWin(item) {
    console.info('item', item);
  }

  render() {
    return (
      <div>
        {/* 模块：用户信息 */}
        <div className={moduleCss['user-info-modules']}>
          <div className="d-flex align-items-center justify-content-center px-40 py-20">
            <div className={moduleCss['user-header']}>
              <XxImg src="http://grids-api.0752app.cn:8888/storage/20201130/5fc45f9d098ce.jpg" alt="" />
            </div>
            <div className={'col px-20 text-over-one ' + moduleCss['user-name']}>用户信息</div>
            <div className={'px-20 py-10 ' + moduleCss['login-out-btn']}>退出登录</div>
          </div>
        </div>

        {/* 模块：分类入口 */}
        <div className="overflow-hidden">
          <div style={{ marginRight: '-0.64rem' }}>
            <div className={"d-flex align-items-center flex-wrap " + moduleCss['entry-list-modules']}>{
              this.state.entryList.map((item, index) => {
                return (
                  <Link 
                    className="col-6" 
                    key={index} 
                    to={item.path} 
                    onClick={() => this.handleOpenToWin(item)}
                  >
                    <div className={"position-relative " + moduleCss['entry-item']}>
                      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="iconfont"></div>
                        <div className="ml-10 title">{item.title}</div>
                      </div>
                    </div>
                  </Link>
                );
              })
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}