/**
* @file: mysql 配置文件
* @Author: liyunjiao2048@163.com
* @Date:   2018-07-12 18:53:41
 * @Last Modified by:   liyunjiao2048@163.com
 * @Last Modified time: 2019-03-26 16:25:03
*/

/*eslint-disable*/
let CONF = {
    host:'xxx.xxxx.xxxx.xxx',  // ip也行域名也行
    user:'root',
    password:'xxxxxx',
    connectionLimit:10,
    database:'some_db', // database
    port:'xxxx'
}


if(process.env.NODE_ENV == 'production'){
    CONF = {
        host:'xx.xxx.xxxx.xxxx',  // ip也行域名也行
        user:'xxxx',
        password:'xxxxxx',
        connectionLimit:10,
        database:'xxxx_db', // database
        port:'xxxxx'
    }
}

export default CONF;