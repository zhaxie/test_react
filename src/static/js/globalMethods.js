/*
 * @Date         : 2021-02-16 17:37:34
 * @LastEditors  : cxx
 * @LastEditTime : 2021-02-17 15:06:14
 * @FilePath     : \test_react\src\static\js\globalMethods.js
 */
import { Component } from 'react';
import Http from 'static/js/ajax.js';
import MProgress from 'components/global/loading/loading.jsx';
import Toast from 'components/global/toast/toast.jsx';

const _this = Component.prototype;

_this.$ajax = new Http().ajax; //请求
_this.$catchError = (error, errorLocation) => {
    console.info(errorLocation || '$catchError', error);
    console.info('error', new Error());
}
_this.$Loading = {
    show: MProgress.start,
    hide: MProgress.done,
}

_this.$toast = Toast.toast; //弹窗