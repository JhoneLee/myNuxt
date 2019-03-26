/**
* @file: api汇总
* @Author: liyunjiao
* @Date:   2018-05-16 17:36:15
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-15 13:12:25
*/
/*eslint-disable*/
import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
let router = new Router({
    prefix: '/api/xjb'
});

// if(process.env.NODE_ENV == 'development'){
//     router.all('*',async (ctx,next)=>{
//         ctx.set('Content-Type','text/json; charset=UTF-8');
//         ctx.set('Access-Control-Allow-Origin',ctx.request.header.origin);
//         ctx.set('Access-Control-Allow-Credentials',true);
//         ctx.set('Access-Control-Allow-Headers','Content-Type,Cache-Control,X-Requested-With,Expires');
//         ctx.set('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
//         await next();
//     });
// }

function autoRequire(filepath){
    let fp = filepath || __dirname;
    fs.readdirSync(fp).filter(filename =>{
        // 以下划线开头命名的文件及文件夹不进行require
        let reg = /^_.*/;
        // if(filepath){
        //     console.log(filename)
        // }
        if(fp === __dirname){
            return filename !== path.basename(__filename) && !reg.test(filename);
        } else {
            return !reg.test(filename);
        }
    }).forEach((e)=>{
        let npath = path.resolve(fp,`./${e}`);
        let stat = fs.lstatSync(npath);
        if(stat.isDirectory()){
            autoRequire(npath);
        } else {
            let sub = require(npath);
            router.use(sub.default.routes());
            router.use(sub.default.allowedMethods());
        }
    });
}
autoRequire();
export default router;