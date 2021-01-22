import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

            inputList: [{
                label: '用户名',
                placeholder: '请输入用户名',
                value: '',
            }, {
                label: '密码',
                placeholder: '请输入密码',
                value: '',
            },
            ]
        }
    }

    componentDidMount() {


    }

    handleInput = (loginInfoObj) => {
        console.info('loginInfoObj', loginInfoObj);
        return;
        // this.setState({
        //     ['loginInfoObj.userName.value']: 1212121212
        // })

        // console.info('loginInfoObj', this.state);
        // return;
        // console.info('loginInfoObj', loginInfoObj);

        // let changeVal = (stateKey, startState) => {
        //     for (let key in stateKey) {
        //         const current = stateKey[key];
        //         const dataType = current.__proto__.constructor;

        //         if (dataType === Object) {
        //             changeVal(stateKey[key], startState[key]);
        //         } else if (dataType === Number || dataType === String) {
        //             startState[key] = stateKey[key];
        //         }
        //     }
        // }

        // changeVal(loginInfoObj, this.state);

        // this.setState({
        //     loginInfoObj: this.state.loginInfoObj
        // })

    }
    render() {
        return (
            <div>
                {/* <a target="_blank" rel="noreferrer" href="http://wpa.qq.com/msgrd?v=3&uin=1817147560&site=qq&menu=yes">测试跳转</a> */}
                {/* <a target="_blank" rel="noreferrer" href="mqqwpa://im/chat?chat_type=wpa&uin=1234567&version=1&src_type=web&web_src=oicqzone.com">测试跳转22</a> */}
                {
                    this.state.inputList.map((item, index) => (
                        <div key={index}>
                            <div>{item.label}</div>
                            <input
                                type="text"

                                
                                placeholder={item.placeholder}
                                value={item.value}
                                onChange={(e) => {
                                    let inputList = this.state.inputList;

                                    inputList[index].value = e.target.value;

                                    this.setState({
                                        inputList
                                    });
                                }} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Login;