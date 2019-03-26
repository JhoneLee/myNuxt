/**
* @file: 框架api 测试
* @Author: liyunjiao2048@163.com
* @Date:   2018-12-19 11:08:11
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-12-19 11:11:05
*/
/*eslint-disable*/
import Router from 'koa-router';
let route = new Router();

route.get('/business/test',async (ctx,next)=>{
    ctx.status = 200;
    ctx.body = {status:1}
});

export default route;