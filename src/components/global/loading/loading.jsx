import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moduleCss from "./loading.module.scss";

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    start = () => { // 开始显示
        this.setState({
            show: true
        })
    }

    done = () => { // 结束隐藏
        this.setState({
            show: false
        })
    }

    render() {
        const isShow = this.state.show;

        if (isShow) {
            return <div className={moduleCss['myprogress']}>
                <div className={moduleCss['bar']}>
                    <div className={moduleCss["peg"]}></div>
                </div>
                <div className={moduleCss["spinner"]}>
                    <div className={moduleCss["spinner-icon"]}></div>
                </div>
            </div>
        } else {
            return null;
        }
    }

}

let div = document.createElement('div');
let Box = ReactDOM.render(React.createElement(
    Progress,
    {}
), div);

document.body.appendChild(div);

export default Box;