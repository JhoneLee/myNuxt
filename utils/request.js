/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-04 15:03:04
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-18 17:18:27
*/

/*eslint-disable*/

import axios from 'axios';

async function reqPost(conf={
    url:'',
    data:{}
}){
    let {url,data} = conf;
    url = '/api/xjb/'+url;
    return await axios({
        url,
        method:'post',
        data
    }).then((res)=>{
        let {data} = res;
        if(data && data.status == 0){
            return data;
        } else {
            console.log('data-error:',data);
            return data;
        }
    }).catch((error)=>{
        console.log('error:',error);
        return false;
    });
}

export default reqPost;