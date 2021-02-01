<template>
    <div class='swiper' ref="swiper">
        <div  v-on:mouseover="stop()" v-on:mouseout="move()" class="app">
            <transition-group tag="ul" name="image">
                <li v-for="(items,index) in list" v-show="index===num" :key="items" >
                    <img :src="'img/'+items" alt="">
                    <div>
                    <span v-for="(items,index) in data" :key="items" class="nav" @click="change(index)" :class="{'active':index==num}">{{items}}</span>
                    </div>
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data(){
        return{
            data:[],
            time:'',
            num:0,
            client_Width: 0,
            in_width: 0
        }
    },
    methods:{
        play(){
            this.time=setInterval(()=>{
                this.num++;
                if(this.num==this.list.length){
                    this.num=0
                }

            },3000)
        },
        change(i){
            this.num=i
        },
        stop(){
            clearInterval(this.time)
        },
        move(){
            this.play();
        }
    },
    created(){
        this.play();
    },
}
</script>

<style scoped>
.app{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}
img{
    width: 100%;
    height: 100%;
}
li{
    width: 100%;
    height: 100%;
    /* border: 5px solid white; */
    color: white;
    position: absolute;
}
ul{
    width: 100%;
    height:100%;
    margin:0;
    padding:0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    list-style: none;
}
.nav{
    background-color: #c3c3c3;
    color: white;
    margin-left: 10px;
    font-size: 20px;
    border-radius: 50%;
    padding: 0 8px;
    margin-bottom: 10px;
    opacity: 0.5;
}
.active{
    opacity: 1;
}
li div{
    margin-top: -30px;
}
.image-enter-active {
    transition: all 1.2s linear
}
.image-leave-active {
    transition: all 1.2s linear;
}
.image-enter-to {
    transform: translateX(0);
}
.image-enter {
    transform: translateX(100%);
}
.image-leave {
    transform: translateX(0);
}
.image-leave-to {
    transform: translateX(-100%);
}
</style>