/**
* @file: 改变redis方法传函数方式
* @Author: liyunjiao2048@163.com
* @Date:   2018-07-20 14:38:02
* @Last Modified by:   liyunjiao_dxm
* @Last Modified time: 2018-12-19 16:06:34
*/

/*eslint-disable*/

import Redis from 'ioredis';
import {convertMapToArray,convertObjectToArray} from '../utils/tools';

Redis.Command.setArgumentTransformer('hmset', function (args) {
    if (args.length === 2) {
        if (typeof Map !== 'undefined' && args[1] instanceof Map) {
            return [args[0]].concat(convertMapToArray(args[1]));
        }
        if ( typeof args[1] === 'object' && args[1] !== null) {
            return [args[0]].concat(convertObjectToArray(args[1]));
        }
    }
    return args;
});

export default Redis;