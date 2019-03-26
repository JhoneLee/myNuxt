/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-04 14:44:36
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-04 14:47:37
*/

/*eslint-disable*/

import Router from 'koa-router';

let router = new Router();

router.post('/send/some',async (ctx)=>{
    let {param} = ctx.request.body;
    ctx.status = 200;
    ctx.body = {
        status:0,
        data:{},
        statusInfo:'success'
    }
});

export default router;