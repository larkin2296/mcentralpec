<template>
    <div id="area">
        <div class='area-title'>哈尔滨</div>
        <img class='area-img' src="img/pull.png" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#area{
    width: 105px;
    height: 35px;
    display: flex;
    align-items: center;
}
.area-title{
    width:85px;
    height:35px;
    float: left;
    line-height:35px;
    /* text-align: justify; */
    font-size:28px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(34,34,34,1);
    margin-right:5px;
}
.area-img{
    width:13px;
    height:9px;
    float:left;
}
/* .area-img img{
    width:100%;
    height:100%;
} */
</style>