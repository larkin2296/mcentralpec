<template>
    <div class='auction'>
        <div class='auction-pic'><img src="" /></div>
        <div class='auction-left'>
             <div class='auction-title'>炭黑基础料/乙烯焦油-1</div>
            <div class='auction-detail'>
                <div class='auction-detail-list'>竞价总量：200吨</div>
                <div class='auction-detail-list'>起拍单价:￥2000</div>
                <!-- <div class='auction-detail-list'>起拍单价:￥2000</div>
                <div class='auction-detail-list'>起拍单价:￥2000</div> -->
            </div>
            <div class='auction-time'>开始时间：06月02日 15:11</div>
        </div>
        <div class='auction-tag'><img src="" /></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.auction{
    width:95%;
    height:244px;
    background:rgba(247,247,247,1);
    border-radius:10px;
    margin:0 auto;
    border-bottom:1px solid rgba(229,229,229,1);
    background-color: #ffffff;
}
.auction-pic{
    width:25%;
    height:244px;
    float:left;
    display: flex;
    align-items: center;
    justify-content: center;
}
.auction-pic img{
    width:150px;
    height:170px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(229,229,229,1);
    border-radius:10px;
}
.auction-left{
    width: 75% ;
    height:auto;
    float:left;
}
.auction-title{
    width:100%;
    height: 110px;
    line-height: 110px;
    font-size:32px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
}
.auction-detail{
    width:100%;
    height:auto;
    line-height: 50px;
    display: flex;
    flex-wrap: wrap;
}
.auction-detail-list{
    width:50%;
    height:50px;
    line-height: 50px;
    font-size:28px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.auction-time{
    width:100%;
    height:50px;
    line-height: 50px;
    font-size:28px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(51,51,51,1);
    float:left;
}
</style>