<template>
    <div class="login-page">
        <frame-header></frame-header>
        <div class="login-content">
            <div class="login-content-wrapper">
                <div class="description">
                    <p class="title">就是一个测试的项目，瞎做着玩</p>
                    <div class="sub-title">
                        <span>随心</span><span>所欲</span><span>瞎几把做</span>
                    </div>
                </div>
                <div class="form-wrapper">
                    <p class="title">欢迎使用xiajibazuo系统</p>
                    <el-form ref="form" status-icon :model="form" :rules="rules2" label-width="80px">
                        <div class="form-content">
                            <el-form-item prop="username">
                                <el-input placeholder="手机/邮箱/用户名" v-model="form.username"></el-input>
                            </el-form-item>
                        </div>
                        <div class="form-content">
                            <el-form-item prop="password">
                                <el-input placeholder="输入密码" type="password" v-model="form.password"></el-input>
                            </el-form-item>
                        </div>
                        <div class="form-content">
                            <el-form-item prop="verifycode">
                                <el-input class="half-input" placeholder="验证码" show-password v-model="form.verifycode"></el-input>
                                <img :src="imgUrl"/>
                                <a href="javascript:;" @click="handleExchangeVcode">换一张</a>
                            </el-form-item>
                        </div>
                        <div class="form-content">
                            <el-button type="primary" @click="handleSubmit">登录</el-button>
                        </div>
                    </el-form>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import frameHeader from '~/components/frame/frameHeader';
    import reqPost from '../utils/request';
    import attach from '../attach/login';
    import { mapMutations,mapGetters } from 'vuex';
    import getStore from '~/store/index';
    // 校验是否登录
    export default {
        components:{
            'frame-header':frameHeader
        },
        computed:{
            ...mapGetters(['loginInfo'])
        },
        methods:{
            handleSubmit(){
                this.$refs.form.validate(async (val)=>{
                    if(val){
                        let sign = attach.requestBefore(this.form);
                        let {username,verifycode} = this.form;
                        let data = await reqPost({
                            url:'login',
                            data:{
                                username,
                                sign,
                                verifycode
                            }
                        });
                        attach.requestAfter(data,this);
                    } else {
                        return false;
                    }
                });
            },
            async handleExchangeVcode(){
                this.imgUrl = `${this.vcode}?t=${Date.now()}`;
            },
            ...mapMutations(['setLoginInfo'])
        },
        data(){
            return {
                form:{
                    username: '',
                    password: '',
                    verifycode:''
                },
                rules2:{
                    username:[
                        {validator:attach.RULES.validateUserName,trigger:'blur'}
                    ],
                    password:[
                        {validator:attach.RULES.validatePassword,trigger:'blur'}
                    ],
                    verifycode:[
                        {validator:attach.RULES.validateSign,trigger:'blur'}
                    ]
                },
                vcode:'/api/xjb/verifycode',
                imgUrl:'/api/xjb/verifycode'+'?t='+Date.now()
            }
        },
        beforeCreate(){
            let store = getStore();
            let obj = store.getters.loginInfo;
            console.log(obj);
        }
    }
</script>
<style lang="less">
    @import '../assets/setting.less';
    .login-page{
        heigth:100%;
        height: 100%;
        overflow: hidden;
        min-height: 475px;
        background-color: #F2F4F7;
        background-size: cover;
        background-image:url('../static/login-page-bg@3x.jpg');
        position: relative;
        &:before{
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            opacity: 0.8;
            background: #2c344d;
        }
        .login-content{
            position: relative;
            height: 100%;
            overflow: hidden;
            padding-bottom: 80px;
            z-index: 1;
            .login-content-wrapper{
                position: relative;
                top: 50%;
                margin-left: 19%;
                margin-right: 20.3%;
                display: flex;
                justify-content: space-between;
                min-width: 900px;
                overflow: hidden;
                transform: translateY(-50%);
                .form-wrapper{
                    padding: 44px 40px 37px;
                    width: 340px;
                    height: 370px;
                    background-color: #fff;
                    border-radius: 4px;
                    box-shadow: 0 9px 9px 0 rgba(0, 0, 0, 0.17);
                    box-sizing:border-box;
                    .title{
                        font-size: 22px;
                        color: #333;
                        line-height: 22px;
                        margin-bottom: 1em;
                    }
                    .form-content{
                        margin-bottom:30px;
                        .el-form-item__content{
                            margin-left:0 !important;
                        }
                        .half-input{
                            width:128px;
                            display:inline-block;
                            vertical-align: middle;
                        }
                        img{
                            display:inline-block;
                            vertical-align:middle;
                            height:40px;
                            width:70px;
                        }
                        a{
                            color:@textColorMiddle;
                            text-decoration:none;
                            display:inline-block;
                            height:40px;
                            width:50px;
                            vertical-align:middle;
                            line-height:40px;
                            text-align:center;
                        }
                        .el-button{
                            width:100%;
                        }
                    }
                }
                .description{
                    margin-top: 13px;
                    .title{
                        margin-bottom: 25px;
                        width: 494px;
                        font-size: 48px;
                        color: #fff;
                        letter-spacing: 1.33px;
                        line-height: 60px;
                        word-break: break-all;
                    }
                    .sub-title{
                        font-size: 16px;
                        color: #fff;
                        line-height: 16px;
                    }
                }
            }
        }
    }
</style>