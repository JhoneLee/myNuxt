/**
* @file: 首页三表
* @Author: liyunjiao2048@163.com
* @Date:   2019-01-08 11:11:32
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 16:44:17
*/

/*eslint-disable*/

'import%20Router%20from%20%27koa-router%27%3B%0Aimport%20%7BgetHomeList%7D%20from%20%27../../service/home%27%3B%0Aimport%20%7BtimeStamp2String%7D%20from%20%27../../utils/tools%27%3B%0Aconst%20router%20%3D%20new%20Router%28%29%3B%0A%0Arouter.post%28%27/business/homelist%27%2Casync%20%28ctx%2Cnext%29%3D%3E%7B%0A%20%20%20%20let%20%7Btype%2Cdate%7D%20%3D%20ctx.request.body%3B%0A%20%20%20%20ctx.status%20%3D%20200%3B%0A%20%20%20%20let%20oid%20%3D%20ctx.session.oid%3B%0A%20%20%20%20date%20%3D%20date%20%7C%7C%20timeStamp2String%28false%2C%27short%27%29%3B%0A%20%20%20%20let%20res%20%3D%20await%20getHomeList%28%7B%0A%20%20%20%20%20%20%20%20uri%3A%27business/homelist%27%2C%0A%20%20%20%20%20%20%20%20params%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20oid%3A+oid%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20date%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20ctx.body%20%3D%20res%3B%0A%7D%29%3B%0A%0Aexport%20default%20router%3B'