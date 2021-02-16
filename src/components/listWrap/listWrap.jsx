import React, { Component } from 'react';
// import moduleCss from "./userList.module.scss";


export default class ListWrap extends Component {
    render() {
        return (
            <div>
               {this.props.listContent()}
            </div>
        );
    }
}

