<template>
  <div id="root">
    <nuxt />
  </div>
</template>

<style lang="less">
@import '../assets/setting.less';
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

html{
  height: 100%;
  overflow-x: hidden;
}
body{
  font-family: "PingFangSC-Regular", "Microsoft YaHei" !important;
  background-color:white;
  height: 100%;
  position: relative;
  min-width: 1366px;
  h1,h2,h3,h4,h5{
    font-weight: normal;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
  }
}

a{
    color:#fff;
    &:hover{
        color:@themeBlue;
    }
}
i{
  font-style:normal;
}
ul{
  list-style: none;
  li{
    list-style: none;
  }
}

#__nuxt{
  height: 100%;
  #__layout{
    height: 100%;
    #root{
      height: 100%;
    }
  }
}

/*重置antd*/
.ant-layout-header{
    background: none;
}
.ant-layout{
    background: none;
}



.danger{
    color:@danger;
}
.warn{
    color:@warn;
}
.focus{
    color:@focus;
}
.normal{
    color:@normal;
}

.empty-content{
  min-height: 300px;
}
</style>
