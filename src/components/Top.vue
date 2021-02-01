<template>
    <div>
        <div class='title-bar'>
            <img class='title-bar-back' @click="go_back" src="img/right-list.png" />
            <div class='title-bar-title'>{{mdata.title}}</div>
            <router-link v-if="mdata.right"  :to="{path: mdata.path}" class='title-bar-right'>
                {{mdata.right}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mdata: {
            type: Object
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
    width:95%;
    height:100%;
    padding: 0 2.5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    width:40px;
    height:40px;
    transform: rotateY(180deg);
}
.title-bar-right{
    width:auto;
    height:90px;
    font-size:34px;
    font-family:PingFang SC;
    font-weight:bold;
    color:#FF7F24;
    line-height:90px;
}
</style>