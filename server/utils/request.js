/**
* @file: request-promise 二次封装
* @Author: liyunjiao
* @Date:   2018-05-17 11:09:59
 * @Last Modified by:   liyunjiao2048@163.com
 * @Last Modified time: 2019-03-26 16:28:46
*/
/*eslint-disable*/
import request from 'request-promise';
import domain from '../utils/domain';

/**
 * 请求接口数据
 * @param {Object} params 后台http请求参数数据 
 */
let docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
let doc = 'application/msword';
function reqGetStreamData(params){
    let {uri,qs} = params;
    return new Promise((resolve,reject)=>{
        request({
            uri:`${domain.MB}api/xjb/${uri}`,
            qs,
            encoding:null,
            headers: {
                'User-Agent': 'Request-Promise',
                'Content-type':docx
            },
            json: false
        }).then(data => {
            resolve(data);
        }, err => {
            let errData = {
                status:1,
                data:err,
                statusInfo:'失败'
            }
            reject(errData);
        }).catch(err => {
            let obj = {
                status: 1,
                data: err,
                statusInfo: '未知错误！'
            };
            reject(obj);
        });
    });
}

export function reqPost(opt) {
    console.log(opt);
    const {uri = '', params = {}} = opt;
    return request({
        method: 'POST',
        uri: `${domain.CM}api/xjb/${uri}`,
        body: params,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }).then(data => {
        return data;
    }).catch(err => {
        return {
            status: 1,
            data: err,
            statusInfo: '未知错误!'
        };
    });
}

export function reqFormPost(opt){
    const {uri = '', params = {}} = opt;
    return request({
        method: 'POST',
        uri: `${domain.MB}api/xjb/${uri}`,
        formData: params,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }).then(data => {
        return data;
    }).catch(err => {
        return {
            status: 1,
            data: err,
            statusInfo: '未知错误!'
        };
    });
}

export default reqGetStreamData;