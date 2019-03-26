/**
* @file: 页面组件逻辑
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-15 14:58:03
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-26 15:22:16
*/

// 页面的部分逻辑剥离，防止单个组件文件过大

/*eslint-disable*/
import md5 from '~/utils/md5';
//表单校验
const RULES = {
    validateUserName(rule,value,cb){
        if(value==''){
            cb(new Error('请输入用户名'));
        } else {
            let reg = /^[a-zA-Z_][a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(value)){
                cb();
            } else {
                cb(new Error('请输入正确的用户名'))
            }
        }
    },
    validatePassword(rule,value,cb){
        if(value == ''){
            cb(new Error('请输入密码'));
        } else {
            let reg = /^[a-zA-Z0-9_-]{8,16}$/;
            if(reg.test(value)){
                cb();
            } else {
                cb(new Error('请输入正确的密码'));
            }
        }
    },
    validateSign(rule,value,cb){
        if(value == ''){
            cb(new Error('请输入验证码'));
        } else {
            let reg = /^[a-zA-Z0-9]{4}$/;
            if(reg.test(value)){
                cb();
            } else {
                cb(new Error('请输入正确的验证码'));
            }
        }
    }
};

// 请求之前准备
function requestBefore(form){
    let {username,password,verifycode} = form;
    let str = md5.md5(
        `username=${username}&sign=${
            md5.md5(`username=${username}&password=${password}`)
        }&verifycode=${verifycode.toLowerCase()}`
    );
    return str;
}
// 请求之后
function requestAfter(data,_this){
    if(data){
        switch(data.status){
            case 0:
                _this.setLoginInfo(data.data);
                _this.$router.push('/');
                break;
            case 1:
                _this.form.verfiycode = '';
                _this.$message({
                    type:'warning',
                    message:'验证码过期'
                });
                _this.$refs.form.fields[2].resetField();
                break;
            case 2:
                _this.$message({
                    type:'warning',
                    message:'验证码错误，请重新输入'
                });
                _this.$refs.form.fields[2].resetField();
                break;
            case 3:
                _this.$refs.form.resetFields();
                _this.$message({
                    type:'error',
                    message:'没有这个用户'
                });
                break;
            case 4:{
                _this.$refs.form.fields[0].resetField();
                _this.$refs.form.fields[1].resetField();
                _this.$message({
                    type:'error',
                    message:'用户名密码失败'
                });
                break;
            }

        }
    } else {
        _this.$message({
            type:'error',
            message:'登录失败，请稍后再试'
        });
    }
}

export default {
    RULES,
    requestBefore,
    requestAfter
}

