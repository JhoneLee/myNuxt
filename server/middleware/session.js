/**
* @file: session 校验中间件
* @Author: liyunjiao2048@163.com
* @Date:   2018-07-19 16:09:11
 * @Last Modified by:   liyunjiao2048@163.com
 * @Last Modified time: 2019-03-26 16:03:22
*/
/*eslint-disable*/
//session中间件配置
import {redis} from '../redis';
// cookie配置

const maxAge = 60*60*1000;
// const maxAge = 10*1000;
const CONFIG = {
    maxAge,
    httpOnly: true,
    overwrite: false
}

export default {
    key:'xjbz',
    maxAge, // session 过期时间 单位ms
    httpOnly:true,
    overwrite:true, // 能否被覆写
    signed:true,
    // renew 是否在即将过期时续签
    // rolling    
}

// 对session进行校验
export async function verify(ctx,next){
    let kk = ctx.cookies.get('xjbz');
    const excludePaths = [
        '/api/xjb/login',
        '/api/xjb/logout',
        '/api/xjb/verifycode'
    ];
    // 开发花卷静暂时对options直接通过
    if(excludePaths.includes(ctx.path) || ctx.request.method === 'OPTIONS' || ctx.request.method === 'GET'){
        await next();
    } else {
        let {cookies} = ctx;
        let key = cookies.get('xjbz');
        console.log(key);
        if(key && ctx.session['user_name']){
            cookies.set('xjbz',key,{
                maxAge
            }); // 对cookie进行延期

            // 这里是 redis原生方法，时间单位是 秒
            redis.expire(key,maxAge/1000); // 对redis session存储进行延期
            if(ctx.session['user_name']){
                let uk = `utable:${ctx.session['user_name']}:${key}`;
                redis.expire(uk,maxAge/1000);
            }
            await next();
        } else if(key){
            await next();
        } else {
            ctx.status = 200;
            ctx.body = {
                status:2,
                statusInfo:'no info'
            };
        }
    }
}
