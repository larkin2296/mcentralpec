<template>
    <div class='goods-type'>
        <div class='goods-type-top'>
            <img class='title-bar-back' @click="go_back" src="img/right-list.png" />
            <search :width="search.width" :height="search.height" :placeholder="search.placeholder" :center="search.center"></search>
        </div>
        <div class='goods-type-list'>
            <div class='goods-type-list-left'>
                <div v-for="(item,index) in list" :class="'list-data '+ (choose == index?'choose':'')" :key="index" @click="get_choose(index)">{{item.name}}</div>
            </div>
            <div class='goods-type-list-right'>
                <div v-for="(item,inx) in list[choose].children" class="list-data" :key="inx">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
// import { get_type } from '@/api/goods.js'
import Search from '@/components/Search.vue'
export default {
    components: { Search},
    data() {
        return {
            list: [{
                name: '成品油，燃料油',
                children: ['汽油','柴油','煤油','燃料油']
            },{
                name: '化工原料',
                children: ['沥青','乙醇']
            }],
            choose: 0,
            search: {
                width: '90%',
                height: '42px',
                placeholder: '请输入商品类型名称',
                center: true
            }
        }
    },
    created(){
        // this.fetchData()
    },
    methods: {
        get_choose(index) {
            this.choose = index
        },
        go_back() {
            this.$emit('next',false)
        }
        // fetchData() {
        //     get_type().then(res=>{
        //         console.log(res)
        //     })
        // }
    }
}
</script>

<style scoped>
.title-bar-back{
    width:40px;
    height:40px;
    transform: rotateY(180deg);
}
.goods-type-top{
    width: 98%;
    height: 100px;
    padding: 0 1%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.goods-type-list{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.goods-type-list-left,.goods-type-list-right{
    width: 50%;
    height: 100%;
}
.goods-type-list-left{
    background-color: #F4F4F4;
}
.goods-type-list-right{
    background-color: #fff;
}
.choose{
    background-color: #fff;
    color: #FF4D00;
}
.list-data{
    line-height: 80px;
    height: 80px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
</style>