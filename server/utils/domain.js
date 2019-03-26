/**
* @file: 域名配置
* @Author: liyunjiao
* @Date:   2018-05-17 11:36:33
 * @Last Modified by:   liyunjiao2048@163.com
 * @Last Modified time: 2019-03-26 16:28:18
*/
/*eslint-disable*/

let MB = 'http://192.168.0.1:8888/';
const CM = 'http://192.168.0.1:8088/';
if(process.env.NODE_ENV == 'production'){
    MB = 'http://192.168.0.1:8888/';
}

export default {
    MB,
    CM
}