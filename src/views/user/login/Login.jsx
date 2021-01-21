import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginInfoObj: {
                userName: {
                    placeholder: '请输入用户名',
                    value: 22333,
                },
                password: {
                    placeholder: '请输入用户名',
                    value: 11,
                }
            }
        }
    }

    handleInput = (e, stateKey) => {
        // const stateKeyList = stateKey.split('-');


        // const loginInfoObj = this.state.loginInfoObj;
        // loginInfoObj[stateKeyList[1]][stateKeyList[2]] = e.target.value;

        // let current;
        // let stateKeyListLen = stateKeyList.length;

        // stateKeyList.forEach((item, index) => {

        //     if (index === 0) {
        //         current = this.state[item];
        //     } else {

        //         if (index === stateKeyListLen - 1) {
        //             current[item][stateKeyListLen - 2] = e.target.value;
        //         } else {
        //             current = current[item];
        //         }
        //     }
        // })

        // loginInfoObj[key].value = e.target.value;

        console.info('stateKey', stateKey);

        this.setState({
            loginInfoObj: Object.assign(this.state.loginInfoObj, stateKey)
        });
        // console.info('this.state', this.state);
    }
    render() {
        return (
            <div>
                {
                    (() => {
                        let userInfoJsxList = [];
                        let { loginInfoObj } = this.state;

                        for (let key in loginInfoObj) {
                            const item = loginInfoObj[key];

                            userInfoJsxList.push(
                                <input
                                    type="text"
                                    key={key}
                                    placeholder={item.placeholder}
                                    value={item.value}
                                    onInput={(e,) => this.handleInput(e,  {
                                        loginInfoObj: {
                                            [key]: {
                                                value: e.target.value
                                            }
                                        }
                                    })}
                                />);
                        }

                        return userInfoJsxList;
                    })()
                }
                <a target="_blank" rel="noreferrer" href="http://wpa.qq.com/msgrd?v=3&uin=1817147560&site=qq&menu=yes">测试跳转</a>
                <a target="_blank" rel="noreferrer" href="mqqwpa://im/chat?chat_type=wpa&uin=1234567&version=1&src_type=web&web_src=oicqzone.com">测试跳转22</a>
            </div>
        );
    }
}

export default Login;