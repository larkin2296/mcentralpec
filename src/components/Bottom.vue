<template>
    <div>
        <router-link :to="item.path" class='navigation-bar' v-for="item in list" v-bind:key="item.path">
            <div class='navigation-bar-top'><img :src="'img/'+item.meta.icon" /></div>
            <div class='navigation-bar-bottom'>{{item.meta.title}}</div>
        </router-link>
    </div>
</template>

<script>
import { constantRoutes } from '@/router'
export default {
    computed:{
        list() {
            return constantRoutes[0].children
        }
    }
}
</script>

<style scoped>
    .navigation-bar{
        width:80px;
        height:auto;
        font-size:20px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(102,102,102,1);
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .navigation-bar-top{
        width:42px;
        height:42px;
    }
    .navigation-bar-top img{
        width:100%;
        height:100%;
    }
</style>