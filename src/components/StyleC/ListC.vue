<template>
    <div class='list-c'>
        <div class='list-c-left' v-if="ldata.type != 'textarea'">
            {{ldata.title}}
        </div>
        <div class='list-c-left textarea-left' v-if="ldata.type == 'textarea'">
            {{ldata.title}}
        </div>
        <div class='list-c-right' v-if="ldata.type == 'input'">
            <input :name="ldata.name" :value="ldata.currentValue" :placeholder="ldata.placeholder" @input="setData" :disabled="ldata.disabled" />
            <img class="right" src="img/right-list.png" v-if="ldata.right == true"/>
        </div>
        <div class='list-c-right' v-if="ldata.type == 'img'">
            <div class='avatar'>
                <img :src="ldata.pic" />
            </div>
        </div>
        <div class='list-c-right end' v-if="ldata.type == 'local'">
            <input :name="ldata.name" :value="ldata.currentValue" :placeholder="ldata.placeholder" @input="setData" :disabled="ldata.disabled" />
            <img class='local' src="img/local.png" />
        </div>
        <div class='list-c-right end' v-if="ldata.type == 'photo'">
            <img class='photo' src="img/camara.png" />
        </div>
        <div class='list-c-right' v-if="ldata.type == 'select'">
            <div class='select'>
                <div class='select-list' v-for="(item,index) in ldata.list" :key="index">{{item}}</div>
            </div>
        </div>
        <div class='list-c-right' v-if="ldata.type == 'switch'">
            <div class='switch'>
                <switch-c v-model="ldata.currentValue" text=""></switch-c>
            </div>
        </div>
        <div style="clear:both;"></div>
        <div class='list-c-right' v-if="ldata.type == 'radio'">
            <div class='radio'>
                <radio-c class='confirm-agree-radio' v-for="(item,index) in ldata.radio" :key="index" :value="item.value" :title="item.title" :name="ldata.name" text=""></radio-c>
            </div>
        </div>
        <div style="clear:both;"></div>
        <div class='list-c-right' v-if="ldata.type == 'checkbox'">
            <div class='radio'>
                <checkbox-c class='confirm-agree-radio' v-for="(item,index) in ldata.checkbox" :key="index" :value="item.value" :title="item.title" :name="ldata.name" text=""></checkbox-c>
            </div>
        </div>
        <div style="clear:both;"></div>
        <div class='list-c-right textarea-right' v-if="ldata.type == 'textarea'">
            <div class='switch'>
                <textarea-c :tdata="ldata"></textarea-c>
            </div>
        </div>
        <div style="clear:both;"></div>
    </div>
</template>

<script>
import SwitchC from '@/components/StyleC/SwitchC.vue'
import RadioC from '@/components/StyleC/RadioC.vue'
import CheckboxC from '@/components/StyleC/CheckboxC.vue'
import TextareaC from '@/components/StyleC/TextareaC.vue'
export default {
    components: { SwitchC, RadioC, CheckboxC, TextareaC },
    props: {
        ldata: {
            type: Object
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
        },
        test(){
            console.log(11111)
        }
    }
}
</script>

<style scoped>
.list-c{
    width:95%;
    padding: 0 2.5%;
    min-height: 140px;
    height: auto;
    line-height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #F1F1F1;
    background-color: #fff;
}
.list-c-left{
    width: 40%;
    height: 100%;
    line-height: 140px;
    font-size: 4vw;
}
.textarea-left{
    width: 100%;
}
.list-c-right{
    width:60%;
    height: 140px;
    line-height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.textarea-right{
    width: 100%;
}
.list-c-right input{
    width: 86%;
    height:70px;
    margin-right:3%;
    padding: 0;
    border: none;
    font-size: 25px;
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
.confirm-agree-radio{
    width: auto;
    height: 80px;
    margin-right:20px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.radio{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.local{
    width: 35px;
    height: 40px;
}
.photo{
    width: 50px;
    height: 45px;
}
.end{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>