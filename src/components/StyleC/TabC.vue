<template>
    <div ref="tab">
        <div class='tab-module' :style="'width:'+width+'px;'" v-for="(item,index) in tabdata" :key="index" @click="change_active(index)">
            <div :class="'tab-module-name '+(active==index?'active':'')">{{item}}</div>
            <div class='tab-module-bottom' v-if="active==index"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tabdata:{
            type: Array
        }
    },
    mounted() {
        let width = this.$refs.tab.clientWidth - 40
        let num = this.tabdata.length
        width = width/num
        this.width = width
    },
    data(){
        return {
            active: 0,
            width: 0
        }
    },
    methods:{
        change_active(index){
            this.active = index
        }
    }
}
</script>

<style scoped>
.tab-module{
    height: 95px;
    float:left;
}
.tab-module-name{
    width:100%;
    height:85px;
    font-size:26px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:85px;
    text-align: center;
}
.tab-module-bottom{
    width:40px;
    height:6px;
    background:linear-gradient(90deg,rgba(255,113,52,1),rgba(255,77,0,1));
    border-radius:3px;
    margin:0 auto;
}
.active{
    font-size:32px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,77,0,1);
}
</style>