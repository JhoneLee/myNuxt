/**
* @file: 工具函数
* @Author: liyunjiao
* @Date:   2018-05-18 15:26:09
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-01 11:36:57
*/
/*eslint-disable*/
export function dealPath(path,data){
    var reg = /^:[0-9a-zA-Z]/;
    let arr = path.split('/');
    let res = [];
    arr.forEach((e)=>{
        if(reg.test(e)){
            let kk = e.substr(1,e.length);
            let vv = data[kk] || 0;
            res.push(vv);
        } else {
            res.push(e);
        }
    })
    return res.join('/');
}

export function htmlDecode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/>/g, "&");
    s = s.replace(/</g, "<");
    s = s.replace(/>/g, ">");
    s = s.replace(/ /g, "");
    s = s.replace(/'/g, "\'");
    s = s.replace(/"/g, "\"");
    s = s.replace(/<br>/g, "\n");
    s = s.replace(/&nbsp;/g,"");
    return s;
}

export function convertMapToArray(map) {
    var result = [];
    var pos = 0;
    map.forEach(function (value, key) {
        result[pos] = key;
        result[pos + 1] = value;
        pos += 2;
    });
    return result;
};


export function convertObjectToArray(obj) {
    var result = [];
    var keys = Object.keys(obj);

    for (var i = 0, l = keys.length; i < l; i++) {
        result.push(keys[i], obj[keys[i]]);
    }
    return result;
};


export function timeStamp2String (datetime,type){
    datetime = datetime || new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var mseconds = datetime.getMilliseconds();
    if(type == 'short'){
        return `${year}-${month>9?month:'0'+month}-${date>9?date:'0'+date}`;
    } else if(type == 'middle'){
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    } else {
        return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second+"."+mseconds;
    }
};