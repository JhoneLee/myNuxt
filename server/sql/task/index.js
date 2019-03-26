/**
* @file: 主文件
* @Author: liyunjiao2048@163.com
* @Date:   2018-07-13 14:59:02
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-12-26 16:04:56
*/

import getDataList from './getDataList';
import getMovieDetail from './getMovieDetail';
import getUserInfo from './getUserInfo';
import login from './login';
export default {
    ...getDataList,
    ...getMovieDetail,
    ...getUserInfo,
    ...login
}