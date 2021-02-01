<template>
    <div>
        <div class='pic-top'>
            <div class='pic-title'>{{name}}</div>
            <div class='pic-content'>
                <div class='pic-content-list' v-for="(item,index) in list" :key="index">
                    <img class='pic-list-detail' :src="item.src" />
                </div>
                <div class='pic-content-list' v-for="(item,index) in words" :key="index">
                    <div class='pic-content-add' @click="add()">
                        <div class='pic-content-list-plus'>
                            +
                        </div>
                        <div class='pic-content-list-word' v-if="item != ''">{{item}}</div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class='pic-bottom' v-if="other == true">
            <div class='pic-bottom-left'>有效期</div>
            <div class='pic-bottom-right' @click="showPickerData2">{{string}}</div>
        </div>
        <input type="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
        <picker
            ref="picker"
            :textTitle="picker.textTitle"
            :type="picker.type"
            :anchor="picker.anchor"
            @change="handlePickerChange"
            @confirm="handlePickerConfirm">
        </picker>
    </div>
</template>

<script>
import Picker from '@/components/picker/picker.vue'
export default {
    components: {Picker},
    props:{
        name: {
            type: String
        },
        words: {
            type: Array,
            default: function () {
                return []
            }
        },
        num: {
            type: Number
        },
        other: {
            type: Boolean
        },
        code: {
            type: String
        },
        index: {
            type: Number
        }
    },
    data() {
        return {
            files: [],
            list: [],
            picker: {
                anchor: [],
                textTitle: '',
                type: 'date'
            },
            string: '',
            listfile: []
        }
    },
    methods: {
        add() {
            this.$refs.file.click()//调用file的click事件
            var param = new Object
            param.data = this.list
            param.file = this.listfile
            param.code = this.code
            param.index = this.index
            param.name = this.name
            this.$emit('addPic',param)
        },
        fileChanged() {
            const list = this.$refs.file.files
                for (let i = 0; i < list.length; i++) {
                    if (!this.isContain(list[i])) {
                        const item = {
                            name: list[i].name,
                            size: list[i].size,
                            file: list[i]
                        }
                        this.html5Reader(list[i], item)
                        this.listfile.push(list[i])
                        this.list.push(item)
                    }
                }
            this.$refs.file.value = ''
        },
        html5Reader(file, item){
            const reader = new FileReader()
            reader.onload = (e) => {
                this.$set(item, 'src', e.target.result)
            }
            reader.readAsDataURL(file)
        },
        isContain(file) {
            return this.files.find((item) => item.name === file.name && item.size === file.size)
        },
        setData(data) {
            console.log(data)
        },
        showPickerData2() {
            this.$refs.picker.show()
        },
        handlePickerChange(column, line, name) {
            if(name == "data1") {
                console.log(column)//选中的列的索引
                console.log(line)//选中的行的索引
            }
            if(name == "data2") {
                console.log(column)//选中的列的索引
                console.log(line)//选中的行的索引
            }
        },
        handlePickerConfirm(value) {
            var string = ''
            string = value[0].value.substr(0,value[0].value.length-1) + '-' + value[1].value.substr(0,value[1].value.length-1) + '-' + value[2].value.substr(0,value[2].value.length-1)
            this.string = string
            var param = new Object
            param.data = string
            param.code = this.code
            param.index = this.index
            param.name = this.name
            this.$emit('setTime',param)
        }
    }
}
</script>

<style scoped>
.pic-top{
    width:100%;
    height:auto;
    background-color: #ffffff;
}
.pic-content{
    width:95%;
    height:auto;
    padding:20px 2.5%;
    display: flex;
    justify-content: left;
    align-items: center;
}
.pic-title{
    width:95%;
    height:100px;
    line-height: 100px;
    padding:0 2.5%;
    font-size:32px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.pic-content-list{
    width:160px;
    height:160px;
    border:1px dotted rgba(175,175,175,1);
    border-radius:4px;
    margin-right:20px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
}
.pic-content-add{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pic-content-list-plus{
    width:30px;
    height:30px;
    line-height: 30px;
    color: #AEAEAE;
    font-size: 44px;
    /* position: relative;
    left: 40%;
    top: -85%;
    z-index: 29 */
}
.pic-content-list-word{
    width:100%;
    height:40px;
    line-height: 40px;
    font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(153,153,153,1);
    text-align: center;
    z-index: 29
}
.pic-bottom{
    width:95%;
    height:101px;
    background:rgba(255,255,255,1);
    padding:0 2.5%;
    line-height: 101px;
}
.pic-bottom-left{
    width:100px;
    height:101px;
    line-height: 101px;
    font-size: 28px;
    text-align: center;
    float:left;
}
.pic-bottom-right{
    width:300px;
    height:101px;
    line-height: 101px;
    font-size: 28px;
    text-align: center;
    float:right;
}
.zm-picker{
    width:100%;
    height:100%;
}
.clear{
    clear: both;
}
.file{
    width:100%;
    height:100%;
    position: relative;
    top:0%;
    left:0%;
    opacity: 0;
    z-index:99
}
input[type="file"] {
    display: none;
}
.pic-list-detail{
    width:160px;
    height:160px;
}
</style>