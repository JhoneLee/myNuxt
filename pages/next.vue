<template>
  <div class="next-page">
    <async-com />
    <h1>下一个页面</h1>
    <div>这是内容</div>
    <nuxt-link to="/">
      去首页
    </nuxt-link>
    <p>{{ JSON.stringify(reqdata) }}</p>
    <input value="点击" type="button" @click="init()">
    <p>{{ list }}</p>
    <nuxt-child />
  </div>
</template>
<script>
/*eslint-disable*/
import reqPost from '../utils/request';
import { mapMutations,mapGetters } from 'vuex';
import higherComponent from '~/components/higherFrameComponent';
import TitleCom from '~/components/Title.vue';
import getStore from '~/store/index';

// (function init(){
//   // let store = getStore();
//   // console.log('kkkkkkk',store.getters.list);
//   higherComponent()
// })();
// let asyncCom = null;
let store = getStore();
let obj = store.getters.userInfo;

export default {
  // 组件级中间件
  middleware: 'pageMid',
  layout: 'layout',
  computed: {
    // array(){
    //   console.log(this.$store)
    //   return this.$store.state.next.list;
    // }
    ...mapGetters(['list'])
  },
  components:{
    // 'async-com':()=>import('~/components/Title')
    // asyncCom:TitleCom
    'async-com':higherComponent(obj)
  },
  methods: {
    ...mapMutations(['init'])
  },
  async asyncData({req,res}){
    if(process.server){
      console.log('server side!!!',req.header.host);
    }
    let data = await reqPost({
      url:'send/some',
      data:{
        name:'next'
      }
    });
    return {
      reqdata:data
    };
  },
  data(){
    return {
      comName:''
    }
  },
  async beforeCreate(){
    // asyncCom = await higherComponent('Title');
    // console.log(asyncCom);
  },
  created(){
    // console.log(this);
    // let name = 'title';
    // this.components[name] = higherComponent(name);
  }
}
</script>
<style lang="less">
.next-page {
  h1 {
    color: red;
  }
  div {
    color: blue;
  }
}
</style>
