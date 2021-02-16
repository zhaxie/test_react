/*
 * @Date         : 2021-02-16 17:37:34
 * @LastEditors  : cxx
 * @LastEditTime : 2021-02-16 18:00:41
 * @FilePath     : \test_react\src\static\js\globalMethods.js
 */
import { Component } from 'react';
import Http from 'static/js/ajax.js';

const _this = Component.prototype;

_this.$ajax = new Http().ajax; //请求
_this.$catchError = (error, errorLocation) => {
    console.info(errorLocation || '$catchError', error);
    console.info('error', new Error());
}

_this.$showLoading = () => {
    
}