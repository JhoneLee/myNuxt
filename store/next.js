/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-04 16:30:08
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-06 17:49:13
*/

/*eslint-disable*/

const state=()=>{
    return {
        list:false,
        userInfo:{}
    }
}

const mutations = {
    init(state){
        state.list = [1,2,3];
    }
}

const getters = {
    list(state){
        return state.list || '我是数组';
    },
    userInfo(state){
        return {
            'Title':{
                props:{
                    titleText:'什么玩意儿'
                }
            },
            'Logo':{}
        }
    }
}

export default {
    state,
    mutations,
    getters
}