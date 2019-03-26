/**
* @file: 下载请求转发
* @Author: liyunjiao2048@163.com
* @Date:   2019-01-28 13:44:53
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 16:44:39
*/

/*eslint-disable*/

'import%20Router%20from%20%27koa-router%27%3B%0Aimport%20%7BReadable%7D%20from%20%27stream%27%3B%0Aimport%20request%20from%20%27../../utils/request%27%3B%0Aimport%20%7BtimeStamp2String%7D%20from%20%27../../utils/tools%27%3B%0Aconst%20router%20%3D%20new%20Router%28%29%3B%0Arouter.get%28%27/xxx/xxxxx%27%2Casync%20%28ctx%2Cnext%29%3D%3E%7B%0A%20%20%20%20let%20%7Ba%2Cb%2Cdate%7D%20%3D%20ctx.query%3B%0A%20%20%20%20date%20%3D%20date%20%7C%7C%20timeStamp2String%28false%2C%27short%27%29%3B%0A%20%20%20%20let%20file%20%3D%20await%20request%28%7B%0A%20%20%20%20%20%20%20%20uri%3A%27word%27%2C%0A%20%20%20%20%20%20%20%20qs%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20orgNo%3Aa%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20date%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20oid%3Actx.session.oid%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20let%20s%20%3D%20new%20Readable%3B%0A%20%20%20%20s.push%28file%29%3B%0A%20%20%20%20s.push%28null%29%3B%0A%20%20%20%20let%20docx%20%3D%20%27application/vnd.openxmlformats-officedocument.wordprocessingml.document%27%3B%0A%20%20%20%20let%20doc%20%3D%20%27application/msword%27%3B%0A%20%20%20%20ctx.set%28%27content-type%27%2Cdoc%29%3B%0A%20%20%20%20ctx.set%28%27content-disposition%27%2C%60attachment%3Bfilename*%3DUTF-8%27%27%24%7BencodeURIComponent%28b%29%7D.doc%60%29%3B%0A%20%20%20%20ctx.body%20%3D%20s%3B%0A%7D%29%3B%0A%0Aexport%20default%20router%3B'
