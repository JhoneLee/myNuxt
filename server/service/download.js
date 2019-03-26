/**
* @file: 下载请求
* @Author: liyunjiao2048@163.com
* @Date:   2019-01-28 13:53:59
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-01-28 13:56:20
*/
/*eslint-disable*/
import {reqFormPost} from '../utils/request';

export async function getDetailInfo(opt){
    let res = await reqFormPost(opt);
    return res;
}