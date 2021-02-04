<template>
    <div class='goods-type'>
        <div class='goods-type-top'>
            <img class='title-bar-back' @click="go_back" src="img/right-list.png" />
            <search :width="search.width" :height="search.height" :placeholder="search.placeholder" :center="search.center"></search>
        </div>
        <div class='goods-type-list'>
            <div v-for="(item,index) in list" :class="'list-data '+ (choose == index?'choose':'')" :key="index" @click="get_choose(index)">
                <img :src="item.pic" />
                <div class='title'>{{item.name}}</div>
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
                pic: 'img/sucai/1.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
            },{
                name: '化工原料',
                pic: 'img/sucai/2.png'
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
        window.scrollTo(0, 0)
        // this.fetchData()
    },
    methods: {
        get_choose(index) {
            this.choose = index
        },
        go_back() {
            this.$emit('goodspic',false)
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
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}
.list-data{
    width: 30%;
    height: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.list-data img{
    width: 100%;
    height: 180px;
}
.list-data .title{
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    color: #fff;
    background: linear-gradient(0deg, #FF870F, #FF5401);
    text-align: center;
}
</style>