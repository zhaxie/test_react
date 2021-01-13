import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginInfoObj: {
                userName: {
                    placeholder: '请输入用户名',
                    value: '2222',
                },
                password: {
                    placeholder: '请输入用户名',
                    value: '2222',
                }
            }
        }
    }

    handleInput = (e) => {
        console.info('e', e);
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
                                onChange={this.handleInput}
                             />);
                        }

                        return userInfoJsxList;
                    })()
                }

            </div>
        );
    }
}

export default Login;