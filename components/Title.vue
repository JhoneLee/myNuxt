<template>
    <div>
        <h1>{{titleText || 'i am title'}}</h1>
    </div>
</template>
<script>
    export default {
        props:{
            titleText:String
        }
    }

</script>
<style>
    h1{
        color:blue;
    }
</style>