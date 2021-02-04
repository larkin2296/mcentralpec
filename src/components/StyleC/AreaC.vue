<template>
    <div class='area'>
        <!-- 背后阴影 -->
        <div class='bg' @click="setBg"></div>
        <!-- 选择弹框主体 -->
        <div class='body'>
            <!-- 标题 -->
            <div class='title'>请选择</div>
            <!-- 选择结果 -->
            <div class='result'>
                <div class='result_list'>{{provinces}}</div>
                <div class='result_list' v-if="type=='city' || type=='area'">{{city}}</div>
                <div class='result_list' v-if="type=='area'">{{area}}</div>
            </div>
            <!-- 选择内容 -->
            <div class='list'> 
                <div class='list_title'>选择城市</div>
                <!-- 行 -->
                <div class='list_center' v-for="(item,index) in list" :key="index" >
                    <div class='list_list' v-for="(items,index1) in item" :key="index1" @click="choose(items,index1)">
                    <div class='list_letter'>{{index1 == 0?index:''}}</div>
                    <div class='list_city'>{{type=='area'?items:items.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 右边选择框 -->
            <div class='select'>
                <div class='select_list' v-for="item in letter" :key="item">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import AreaData from '../../../public/json/address_final_data.json'
export default {
    data() {
        return {
            letter: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            area: AreaData,
            list: [],
            type: 'provinces',
            provinces: '请选择省份',
            city: '请选择城市',
            area: '请选择区'
        }
    },
    created() {
        console.log(AreaData)
        this.list = AreaData
    },
    methods: {
        choose(data,index){
            console.log(data)
            console.log(index)
            if(data.cityList){
                if(this.type == 'provinces'){
                    this.provinces = data.name
                    this.type = 'city'
                }
                this.list = data.cityList
            }else if(data.areaList){
                this.type = 'area'
                this.list = data.areaList
                this.city = data.name
            }else{
                this.area = data
                var param = new Object
                param.provinces = this.provinces
                param.city = this.city
                param.area = this.area
                this.$emit('address',param)
            }
        },
        setBg(){
            this.$emit('setBg',false)
        }
    }
}
</script>

<style scoped>
.area{
    width:100%;
    height:100%;
    position: fixed;
    bottom:0px;
    left:0px;
}
.bg{
    width: 100%;
    height:100%;
    background-color: rgba(18, 18, 19, 0.1);
}
.body{
    width:100%;
    height:70%;
    position: fixed;
    bottom: 100px;
    background-color: #fff;
    border-radius: 20px 20px 0px 0;
    overflow: scroll;
}
.title{
    width:100%;
    height:100px;
    line-height: 100px;
    text-align: center;
    font-size: 24px;
}
.result{
    width:95%;
    height:80px;
    padding:0 2.5%;
    display: flex;
    align-items: center;
    justify-content: left;

}
.result_list{
    width:auto;
    padding:0 10px;
    margin-left:20px;
    font-size: 24px;
}
.list{
    width:100%;
    height: auto;
}
.list_title{
    width: 85%;
    height:60px;
    line-height: 60px;
    color: #999999;
    padding:0 7.5%;
    font-size: 24px;
}
.list_center{
    width:100%;
    height:auto;
}
.list_list{
    width:100%;
    height:80px;
    /* display: flex;
    align-items: center;
    justify-content: left; */
}
.list_letter{
    width:10%;
    height:80px;
    text-align: center;
    line-height: 80px;
    color: #999999;
    font-size: 24px;
    float:left;
}
.list_city{
    width:90%;
    height:90%;
    line-height: 80px;
    color: #000;
    font-size: 24px;
    float:left;
}
.select{
    width:50px;
    height:auto;
    position: fixed;
    bottom:120px;
    right:20px;
    border-radius: 20px;
    background-color: #EDEFF1;
    font-size: 22px;
    color: #999999;
}
.select_list{
    width:50px;
    height:37px;
    line-height: 50px;
    text-align: center;
}
</style>