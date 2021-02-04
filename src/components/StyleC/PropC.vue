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
                <div class='result_list' v-for="(item,index) in list.data" :key="index">
                    <div>{{item}}</div>
                    <input v-if="list.type == 'radio'" type="radio" :id="item" name="list" :value="item" />
                    <input v-if="list.type == 'checkbox'" type="checkbox" :id="item" name="list" :value="item" />
                </div>
            </div>

            <button-c class="prop-button" :bdata="button_data"></button-c>
        </div>
    </div>
</template>

<script>
import ButtonC from '@/components/StyleC/ButtonC.vue'
export default {
    components: { ButtonC },
    data() {
        return {
            list: {type:'radio',data: ['人民币','美元','日元']},
            button_data: {
                width: '95%',
                height: '50px',
                color: '#fff',
                background: 'linear-gradient(-90deg, #F7B443 0%, #FA802E 100%)',
                text: '确定',
                font: '14px',
                radius: '5px'
            }
        }
    },
    created() {
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
    font-size: 30px;
}
.result{
    width:100%;
    height:70%;

}
.result_list{
    width:95%;
    height: 60px;
    line-height: 60px;
    margin-left:20px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
input[type=radio] {
	/*去除浏览器默认样式*/
    -webkit-appearance:none;
	-moz-appearance:none;
	appearance:none;
	/*自定义样式*/
    position:relative;
	display:inline-block;
	width:30px;
	height:30px;
	border:1px solid #CCCCCC;
	outline:none;
	cursor:pointer;
	/*设置为圆形，看起来是个单选框*/
    -webkit-border-radius:50%;
	-moz-border-radius:50%;
	border-radius:50%;
    vertical-align:middle;
    margin: 0px;
}
input[type=radio]:after {
	content:'';
	position:absolute;
	width:75%;
	height:75%;
	display:block;
	left:0.5px;
	top:1px;
	right:0;
	bottom:0;
	margin:auto;
	background:#FF4D00;
	-webkit-border-radius:50%;
	-moz-border-radius:50%;
	border-radius:50%;
	-webkit-transform:scale(0);
	-moz-transform:scale(0);
	transform:scale(0);
	/*增加一些动画*/
    -webkit-transition:all ease-in-out 300ms;
	-moz-transition:all ease-in-out 300ms;
	transition:all ease-in-out 300ms;
}
input[type=radio]:checked {
	border:1px solid #FF4D00;
}
input[type=radio]:checked:after {
	-webkit-transform:scale(1);
	-moz-transform:scale(1);
	transform:scale(1);
}
input[type=checkbox]{
	-webkit-appearance:none;
	-moz-appearance:none;
	appearance:none;
    position: relative;
    margin: 0px;
    display:inline-block;
	width:30px;
	height:30px;
	border:1px solid #CCCCCC;
    vertical-align: middle;
	border-radius: 10px;
}
input[type=checkbox]:checked{
    border-color: #ff6435;
    background: #ff6435;
}
input[type=checkbox]:checked:after{
	content: '';
    position: absolute;
	top: 5px;
	left: 5px;
    width: 10px;
    height: 5px;
	background:#ff6435;
    border-left: 4px solid #fff;
	border-bottom: 4px solid #fff;
    -webkit-transform: rotateZ(-45deg);
	transform: rotateZ(-45deg);
}
.prop-button{
    margin: 0 auto;
}
</style>