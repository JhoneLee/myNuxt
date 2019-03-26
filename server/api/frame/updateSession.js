/**
* @file: 更新用户session
* @Author: liyunjiao2048@163.com
* @Date:   2019-01-02 15:22:57
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 16:41:08
*/

/*eslint-disable*/
// get方式调取接口，更新用户session数据
import%20Router%20from%20%27koa-router%27%3B%0Aimport%20%7Bredis%7D%20from%20%27../../redis%27%3B%0Aimport%20task%20from%20%27../../sql/task%27%3B%0Alet%20router%20%3D%20new%20Router%28%29%3B%0Alet%20%7Blogin%7D%20%3D%20task%3B%0Arouter.get%28%27/frame/update/session%27%2Casync%20%28ctx%2Cnext%29%3D%3E%7B%0A%20%20%20%20let%20%7Bu%7D%20%3D%20ctx.query%3B%0A%20%20%20%20ctx.status%20%3D%20200%3B%0A%20%20%20%20if%28%21u%29%7B%0A%20%20%20%20%20%20%20%20ctx.body%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A1%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%27%u8BF7%u4F20%u5165%u6B63%u786E%u7684%u53C2%u6570%27%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20let%20reg%20%3D%20u%3F%60utable%3A%24%7Bu%7D%3A*%60%3A%27utable%3A*%3A*%27%3B%0A%20%20%20%20%20%20%20%20let%20vals%20%3D%20await%20redis.keys%28reg%29%3B%0A%20%20%20%20%20%20%20%20let%20sqlResult%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20if%28vals.length%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20sqlResult%20%3D%20await%20login%28%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27user_name%27%3Au%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%28%21sqlResult%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.body%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20status%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20statusInfo%3A%27%u6570%u636E%u5E93%u9519%u8BEF%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20%7Buser_id%2C%20user_name%2C%20password%2C%20nick_name%2C%20oid%2Crelation%7D%20%3D%20sqlResult.data%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20for%28let%20i%3D0%3Bi%3Cvals.length%3Bi++%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20v%20%3D%20vals%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20sid%20%3D%20v.split%28%27%3A%27%29%5B2%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20lid%20%3D%20await%20redis.hmget%28sid%2C%27login_id%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20login_id%20%3D%20lid%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%28sid%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20await%20redis.hmset%28sid%2C%7Buser_name%2C%20nick_name%2C%20password%2C%20oid%2C%20user_id%2C%20login_id%2Crelation%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.body%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20status%3A0%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20statusInfo%3A%27success%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%29%3B%0A%0Afunction%20converData%28data%29%7B%0A%0A%7D%0A%0Aexport%20default%20router%3B