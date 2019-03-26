<template>
    <div>
        <h1>{{error}}</h1>
        <p>出错页面，需要定制</p>
    </div>
</template>
<script>
    export default {
        props:['error'],
        layout:'layout'
    }
</script>