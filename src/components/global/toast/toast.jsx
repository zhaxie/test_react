import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moduleCss from "./toast.module.scss";

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    toast = (options) => {
        const state = this.state;

        clearTimeout(this.hideToastTimer);

        this.setState({
            ...state,
            ...options,
            isShow: true,
        });

        this.hideToastTimer = setTimeout(() => {
            this.setState({
                ...state,
                isShow: false,
            });
        }, options.duration || 500);
    }

    render() {
        const { isShow, msg } = this.state;

        if (isShow) {
            return <div className={`position-fixed px-20 py-10 ${moduleCss['toast-box']}`}>
                {msg}
            </div>
        } else {
            return null;
        }
    }

}

let div = document.createElement('div');
let Box = ReactDOM.render(React.createElement(
    Toast,
    {}
), div);

document.body.appendChild(div);

export default Box;