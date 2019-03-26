<template>
  <h1>{{ title }}</h1>
</template>
<script>
/*eslint-disable*/
export default {
  async asyncData(ctx){
    return {
      title:ctx.params.detail
    }
  }
}
</script>
<style lang="less">
h1{
    color:green;
}
</style>