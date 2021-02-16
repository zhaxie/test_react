/*
 * @Date         : 2021-02-16 17:09:09
 * @LastEditors  : cxx
 * @LastEditTime : 2021-02-16 17:56:09
 * @FilePath     : \test_react\src\static\js\ajax.js
 */

import api from 'static/js/api.js';

export default class Http {
    constructor() {
        this.apiKeyObj = {};
        this.apiObj = api;
        this.requestUrl = 'https://runxin-api.ozkoalas.cn';
    };

    ajax(options = {}) {
        // return new Promise(async (resolve, reject) => {
        //     // const {apiKey, data} = options;
        //     try {
                
        //     } catch (error) {
        //         console.error('ajax出错了', )
        //         reject(error)
        //     }
        // });
    };
}