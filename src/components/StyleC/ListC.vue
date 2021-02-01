<template>
    <div class='list-c'>
        <div class='list-c-left'>
            {{title}}
        </div>
        <div class='list-c-right' v-if="type == 'input'">
            <input :name="name" :value="currentValue" :placeholder="placeholder" @input="setData" />
            <img class="right" src="img/right-list.png" />
        </div>
        <div class='list-c-right' v-if="type == 'img'">
            <div class='avatar'>
                <img :src="pic" />
            </div>
        </div>
        <div class='list-c-right' v-if="type == 'select'">
            <div class='select'>
                <div class='select-list' v-for="(item,index) in list" :key="index">{{item}}</div>
            </div>
        </div>
        <div class='list-c-right' v-if="type == 'switch'">
            <div class='switch'>
                <switch-c v-model="currentValue" text=""></switch-c>
            </div>
        </div>
        <div style="clear:both;"></div>
    </div>
</template>

<script>
import SwitchC from '@/components/StyleC/SwitchC.vue'
export default {
    components: { SwitchC },
    props: {
        title: {
            type: String
        },
        name: {
            type: String
        },
        currentValue: {
            type: String
        },
        placeholder: {
            type: String
        },
        type: {
            type: String
        },
        list: {
            type: Array
        },
        pic: {
            type: String
        }
    },
    data() {
        return {
            // currentValue: ''
        }
    },
    methods: {
        setData(event){
            const value = event.target.value
            this.$emit('input',value)
        }
    }
}
</script>

<style scoped>
.list-c{
    width:100%;
    height: 140px;
    line-height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #F1F1F1;
}
.list-c-left{
    width: 40%;
    height: 100%;
    line-height: 140px;
    font-size: 5vw;
}
.list-c-right{
    width:60%;
    height: 100%;
    line-height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.list-c-right input{
    width: 94%;
    height:50%;
    margin-right:3%;
    padding: 0;
    border: none;
    font-size: 30px;
    text-align: right;
}
.list-c-right .right{
    width: 30px;
    height: 35px;
}
.list-c-right .avatar{
    width: 100%;
    height: 100%;
}
.avatar img{
    float:right;
    width: 10vh;
    height: 100%;
}
.select{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.select-list{
    width: auto;
    height:80px;
    background-color: #F6F6F6;
    font-size: 28px;
    line-height: 80px;
    text-align: center;
    border-radius: 10px;
    padding: 0px 20px;
    margin-left: 20px;
}
.switch{
    width: 100%;
    height: 100%;
}
</style>