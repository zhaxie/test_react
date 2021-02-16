import React, { Component } from 'react';
import moduleCss from "./xxImg.module.scss";

export default class XxImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadedSuccess: null,
        };
    }

    handleLoadImgSuccess = (e) => {
        console.info('图片加载成功', e);

        const state = this.state;

        this.setState({
            ...state,
            isLoadedSuccess: true,
        });
    }

    handleLoadImgError = (e) => {
        console.info('图片加载失败', e);

        const state = this.state;

        this.setState({
            ...state,
            isLoadedSuccess: false,
        });
    }

    render() {
        return (
            <div className="position-relative imgCover">
                {
                    (() => {
                        const isLoadedSuccess = this.state.isLoadedSuccess;

                        if (isLoadedSuccess === null) {
                            return <div className={'position-absolute iconfont icon-loading ' + moduleCss['icon-loading']}></div>
                        } else if (isLoadedSuccess === false) {
                            return <div className={'position-absolute iconfont icon-load-fail ' + moduleCss['icon-load-fail']}></div>
                        }
                    })()
                }
                {
                    (() => {
                        const isLoadedSuccess = this.state.isLoadedSuccess;

                        if (isLoadedSuccess === true || isLoadedSuccess === null) {
                            return <img
                                className={`imgCover animated ${moduleCss['img-content']} ${isLoadedSuccess === true ? moduleCss['active'] : ''}`}
                                src={this.props.src}
                                alt="头像"
                                onLoad={this.handleLoadImgSuccess}
                                onError={this.handleLoadImgError}
                            />
                        }
                    })()
                }
            </div>
        );
    }
}
