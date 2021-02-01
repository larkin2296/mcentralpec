<template>
    <div class='layout'>
        <top class='top' :title="key.meta.title" v-if="key.path !='/index'"></top>
        <div class='content'>
            <keep-alive>
                <router-view :key="key.path" />
            </keep-alive>
        </div>
        <!-- 修改为白名单模式 -->
        <bottom class='bottom' v-if="key.path !='/login/index'"></bottom>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Bottom from '../components/Bottom.vue'
export default {
    name: 'AppMain',
    components: { Top, Bottom },
    computed: {
        key() {
            console.log(this.$route)
            return this.$route
        }
    }
}
</script>

<style scoped>
.layout{
    overflow: scroll;
}
.top{
    width:100%;
    height:90px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 0px 0px rgba(229,229,229,1);
}
.content{
    width:100%;
    height:auto;
    background:#F5F5F5;
    box-shadow:0px 1px 0px 0px rgba(229,229,229,1);
}
.bottom{
    width:750px;
    height:98px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(204,204,204,1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom:0px;
    left:0px;
}
</style>