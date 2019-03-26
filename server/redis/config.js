/**
* @file: redis配置文件
* @Author: liyunjiao2048@163.com
* @Date:   2018-07-20 10:43:06
 * @Last Modified by:   liyunjiao2048@163.com
 * @Last Modified time: 2019-03-26 16:25:49
*/

/*eslint-disable*/
let CONF = {
    port:1111,
    host:'xxx.xxx.xxx.xxx',
    family:4,
    password:'xxxxxx',
    db:1,
    retryStrategy(times){
        return Math.min(times*50,2000);
    },
    reconnectOnError(err){
        if(err.message.slice(0,8) == 'READONLY'){
            return true;
        }
    }
}
if(process.env.NODE_ENV == 'production'){
    CONF = {
        port:1232,
        host:'xxx.xxx.xxx.xxx',
        family:4,
        password:'xxxxxxxx',
        db:1,
        retryStrategy(times){
            return Math.min(times*50,2000);
        },
        reconnectOnError(err){
            if(err.message.slice(0,8) == 'READONLY'){
                return true;
            }
        }
    }
}

export default CONF;