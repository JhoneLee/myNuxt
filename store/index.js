/**
* @file: store 主文件
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-06 13:50:17
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-15 17:02:54
*/

/*eslint-disable*/

import Vue from 'vue';
import Vuex from 'vuex';

// 分别加载各文件的模块
import next from './next';
import login from './login';


Vue.use(Vuex);

let store = new Vuex.Store({
    modules:{
        next,
        login
    }
});

export default function(){
    return store;
};


