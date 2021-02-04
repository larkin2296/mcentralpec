<template>
    <div class='goods-type'>
        <div class='goods-type-top'>
            <img class='title-bar-back' @click="go_back" src="img/right-list.png" />
            <search :width="search.width" :height="search.height" :placeholder="search.placeholder" :center="search.center"></search>
        </div>
        <div class='goods-type-list'>
            <div v-for="(item,index) in list" class="list-data" :key="index" @click="get_choose(index)"><img v-if="item.pic" :src="item.pic" />{{item}}</div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    components: { Search },
    data() {
        return {
            list: ['硫磺(3917)','甲苯(3743)','石脑油(3958)','硫磺(3917)'],
            search: {
                width: '90%',
                height: '42px',
                placeholder: '请输入商品品类名称',
                center: true
            }
        }
    },
    methods: {
        get_choose(index) {
            this.choose = index
        },
        go_back() {
            this.$emit('searchlist',false)
        }
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
}
.list-data{
    width: 95%;
    margin: 0 auto;
    line-height: 80px;
    height: 80px;
    font-size: 30px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    align-items: center;
}
.list-data img{
    width: 30px;
    height: 30px;
}
</style>