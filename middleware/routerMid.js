/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-02-27 16:22:14
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 15:48:53
*/
/*eslint-disable*/
// 路由切换中间件

// 可配置化用户信息json结构示例

/*
    [
        {   // 页面路由名称
            "router": "home",
            // 路由下面的组件
            "components": [
                {   // 组件名称
                    "name": "testComponent1",
                    "props": {
                        "propsName": [
                            "propsName1",
                            "propsName2",
                            "propsName3"
                        ]
                    }
                },
                {
                    "name": "testComponent",
                    "props": {}
                }
            ]
        },
        {
            "router": "list",
            "components": [.....]
        },
        .......
    ]


*/


import req from '~/utils/request';
export default async function(ctx){
    let {route,store,app} = ctx;
    let {loginInfo} = store.getters;
    // 判断store中是否存在用户的登录信息
    if(!loginInfo || !loginInfo.username){
        // 如果没有则请求，（当单页面应用被F5刷新的时候，store内容全部消失，需要重新获取）
        let data = await req({
            url:'user/info'
        });
        if(data.status == 0 && data.data.username){
            // 保存到store
            store.commit('setLoginInfo',data.data);
            loginInfo = data.data;
        } else {
            // 如果没有获取到用户信息，则跳登录页
            if(route.name !='login'){
                app.router.push('/login');
                return;
            }
        }
    }
    if(route.name == 'index'){
        console.log('重定向');
        app.router.push('/home');
        return;
    }
    // 校验用户页面权限
    let utable = orderRelation(loginInfo.relation);
    store.commit('setUserTable',utable);
    if(utable[route.name] || route.name == 'error' || route.name=='login'){
        console.log('next()');
        let pt = orderComponents(utable[route.name]);
        store.commit('setPageTable',pt);
    } else {
        app.router.push('/error');
    }
}

function orderRelation(array){
    let table = {};
    array.forEach(e=>{
        table[e.router] = e.components;
    });
    return table;
}

function orderComponents(array){
    let table = {};
    array.forEach(e=>{
        table[e.name] = e;
    });
    return table;
}