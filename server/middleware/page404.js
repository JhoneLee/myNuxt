/**
* @file: 404页面处理
* @Author: liyunjiao
* @Date:   2018-05-17 11:28:02
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-01-21 10:50:21
*/
/*eslint-disable*/
const page404 = async (ctx,next)=>{
    ctx.status = 200;
    ctx.body = {
        status:404,
        status:'NOT_FOUND'
    };
    return;
};

export default page404;