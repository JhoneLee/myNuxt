/**
* @file: 首页组件相关接口请求
* @Author: liyunjiao2048@163.com
* @Date:   2019-01-21 15:19:58
 * @Last Modified by:   liyunjiao2048@163.com
 * @Last Modified time: 2019-03-26 16:04:07
*/

/*eslint-disable*/
import {reqFormPost} from '../utils/request';

export async function getHomeList(opt){
    let res = await reqFormPost(opt);
    if(res.status == 0){
         let {newOrigin,lyrical} = res.data;
         newOrigin.list = newOrigin.list.slice(0,5);
         lyrical.list = lyrical.list.slice(0,5);
    }
   
    return res;
}

export async function getRobot(opt) {
    const res = await reqFormPost(opt);
    return res;
}


export async function searchP2P(opt){
    let res = await reqFormPost(opt);
    return res;
}