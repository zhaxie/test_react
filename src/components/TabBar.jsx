
import React, { Component } from 'react';

let cssStyle = {
    footerBarBox: {
        left: 0,
        right: 0,
        bottom: 0,
    },
    tabActive: {
        color: 'red',
    }
};

class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTabActiveIndex: 0,
        }
    }

    handleTapTabBarItem = (itemIndex) => {
        this.setState({
            currentTabActiveIndex: itemIndex,
        });

        this.props.onChange(itemIndex);
    };

    render() {
        return (
            <div
                className={'position-fixed z1000 d-flex align-items-center justify-content-center'}
                style={cssStyle.footerBarBox}
            >
                {this.props.tabBtnList().map((item, index) => {
                    return (
                        <div
                            className={"col text-center"}
                            key={item.title}
                            style={index === this.state.currentTabActiveIndex ? cssStyle.tabActive : {}}
                            onClick={() => this.handleTapTabBarItem(index)}
                        >{item.title}</div>
                    )
                })}
            </div>
        );
    }
}

export default TabBar;