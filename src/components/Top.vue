<template>
    <div>
        <div class='title-bar'>
            <div class='title-bar-back' @click="go_back">＜</div>
            <div class='title-bar-title'>{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(to, from) // 可以拿到 from， 知道上一个路由是什么，从而进行判断
        //在next中写处理函数
        next(vm => vm.setNumber(from.path));
    },
    methods: {
        go_back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.title-bar{
    width:100%;
    height:100%;
}
.title-bar-title{
    width:auto;
    height:90px;
    text-align: center;
    font-size:34px;
    margin:0 auto;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:90px;
}
.title-bar-back{
    width:auto;
    height:90px;
    font-size:34px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:90px;
    position: absolute;
    top:0px;
    left: 20px;
}
</style>