/**
* @file: redis主文件
* @Author: liyunjiao2048@163.com
* @Date:   2018-07-20 10:40:28
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-08 16:45:37
*/

/*eslint-disable*/
// 引入redis管理session

import Redis from './transformer';
import conf from './config';
import { Store } from "koa-session2";
export const redis = new Redis(conf);


// 使用koa-session2@babel 使获取redis结果能够同步执行 
// 直接对ctx.session赋值/取值 就会触发get set操作
// ctx.session = null  触发 destroy

class RedisStore extends Store {
    constructor(){
        super();
    }
    async get(key,ctx){
        let res = await redis.hgetall(key).then(r=>r).catch(e=>{
            {error:e}
        });
        return res;
    }
    async set(session, { sid =  this.getID(24), maxAge = 60*60*1000 } = {}, ctx){
        if(session){
            let seconds = Math.floor(maxAge/1000);
            await redis.hmset(sid,session);
            await redis.expire(sid,seconds);
            if(session['user_name']){
                let uk = `utable:${session['user_name']}:${sid}`;
                redis.set(uk,sid);
                redis.expire(uk,seconds);
            }
            return sid;
        } else {
            return sid;
        }
    }
    async destroy(key,ctx){
        console.log('destory',key);
        let uk = await redis.keys(`utable:*:${key}`);
        await redis.del(key);
        await redis.del(uk[0]);
    }
}
let store = new RedisStore();

export default store;