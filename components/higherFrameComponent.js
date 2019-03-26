/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-05 16:15:57
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 15:23:09
*/

/*eslint-disable*/

// 高阶组件，用来异步加载组件

import Vue from 'vue';
export default function(obj){
    let components = {};
    let props = {};
    console.log('higher',obj);
    for(let item in obj){
        console.log('higher props name',item)
        components[`${item}-com`] = getPath(item);
        props[`${item}-com`] = obj[item].props;
    }
    return Vue.component('higher-component',{
        components,
        render(h){
            let arr = [];
            for(let item in components){
                arr.push(h(item,{props:props[item]}));
            }
            return h('div',arr);
        }
    });
}


function getPath(name){
    // let {name,type} = opt;
    // if(type == 'page'){
    //     return ()=>import(`../../page/${name}/index`);
    // } else {
    //     return ()=>import(`../${type}/${name}/index`);
    // }
    return ()=>import(`./${name}`);
}