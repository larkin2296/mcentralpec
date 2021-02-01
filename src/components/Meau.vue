<template>
    <div class='meau'>
        <div class='meau-title'>
            {{meaulist.title}}
        </div>
        <div class='meau-content'>
            <div class='meau-list' v-for="(item,index) in meaulist.list" :key="index" @click="go(item.url)">
                <div class='meau-pic'>
                    <img :src="item.pic" />
                </div>
                <div class='meau-word'>
                    {{item.word}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        meaulist: {
            type: Object
        }
    },
    methods:{
        go(path){
            this.$router.push({ path: path })
        }
    }
}
</script>

<style scoped>
.meau{
    width:95%;
    height: auto;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 0px;
}
.meau-title{
    height: 40px;
    line-height: 40px;
    font-size: 4vw;
    margin-left: 10px;
}
.meau-content{
    width: 100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.meau-list{
    width: 25%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.meau-pic{
    width:60px;
    height:60px;
}
.meau-pic img{
    width:100%;
    height:100%;
}
.meau-word{
    font-size: 2vw;
    line-height: 100px;
    height: 100px;
}
</style>