/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-15 16:22:06
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 15:06:59
*/

/*eslint-disable*/

const state=()=>{
    return {
        loginInfo:{},
        userTable:{},
        pageTable:{}
    }
}

const mutations = {
    setLoginInfo(state,ui){
        state.loginInfo = ui || {};
    },
    setUserTable(state,ui){
        state.userTable = ui || {};
    },
    setPageTable(state,pt){
        state.pageTable = pt || {};
    }
}

const getters = {
    loginInfo(state){
        return state.loginInfo;
    },
    userTable(state){
        return state.userTable;
    },
    pageTable(state){
        return state.pageTable;
    }
}

export default {
    state,
    mutations,
    getters
}