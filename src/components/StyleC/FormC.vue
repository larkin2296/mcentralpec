<template>
    <div>
        <form :model="form" ref="form">
            <div class="form_list" v-for="(item,index) in formdata.data[step_now]" :key="index">
                <input-c class='form-input' v-if="item.type=='input'" :name="item.code" v-model="form[item.code]" :placeholder="item.placeholder"></input-c>
                <upload-c ref="upload" class='pic-list' v-if="item.type=='pic'" :index="index" :name="item.name" :other="item.other" :code="item.code" v-model="form[item.code]" :num="item.num" :words="item.words" @setTime="set_time" @addPic="add_pic"></upload-c>
                <div class='form-input' v-if="item.type=='area'" @click="show_area()">
                    <div class='input-c'>
                        <input :value="address" :placeholder="item.placeholder"/>
                    </div>
                </div>
                
                <!-- <select-c :type="item.name" v-if="item.type=='area'" :list="item.value"></select-c> -->
            </div>
        </form>
        <div class="button-back">
            <div class='confirm-button too-bottom' @click="go_next()">{{last==false?'下一步':'注册'}}</div>
        </div>
        <area-c v-if="show == true" @address="updateCity"></area-c>
    </div>
</template>

<script>
import InputC from '@/components/StyleC/InputC.vue'
import UploadC from '@/components/StyleC/UploadC.vue'
// import SelectC from '@/components/StyleC/SelectC.vue'
import AreaC from '@/components/StyleC/AreaC.vue'
export default {
    components: {InputC, UploadC, AreaC},
    props: {
        formdata: {
            type: Object
        }
    },
    data(){
        return {
            step_now: 0,
            last: false,
            form: {},
            componentsData: '',
            show: false,
            address: '',
            confirm_data: [],
            pic: {}
        }
    },
    created() {
        console.log(this.formdata)
    },
    methods: {
        getData(e){
            this.componentsData = e
        },
        show_area() {
            this.show = true
        },
        go_next(){
            // 如果步骤到最后一部则上传图片
            var param = new Object
            if(this.step_now == (this.formdata.data.length-1)){

                param.data = this.pic
                param.data.confirm_data = this.confirm_data
                param.last = this.last
                this.$emit('next',param)
            }else{
                // 否则上传表单数据
                param.data = this.form
                param.last = this.last
                this.$emit('next',param)
            }
            if(this.step_now < (this.formdata.data.length-1)){
                this.step_now++
                if(this.step_now == (this.formdata.data.length-1)){
                    this.last = true
                    // 创建图片上传前数组大小
                    var length = this.formdata.data[this.formdata.data.length-1].length
                    var params = new Array
                    var ob = new Object
                    for(var i=0;i<length;i++){
                        ob.term = 1//this.formdata.data[this.formdata.data.length-1][i].other == true?1:2
                        ob.term_time = ''
                        ob.file_name = ''
                        ob.title = ''
                        params.push(ob)
                    }
                    this.confirm_data = params
                    console.log(this.confirm_data)
                }else{
                    this.last = false
                }
            }
        },
        updateCity(data) {
            this.form.province = data.provinces
            this.form.city = data.city
            this.show = false
            this.address = data.provinces +','+ data.city
        },
        set_time(data) {
            this.confirm_data[data.index] = {
                term: 0,
                term_time:data.data,
                file_name:data.code,
                title:data.name
            }
        },
        add_pic(data) {
            this.confirm_data[data.index] = {
                file_name: data.code,
                title: data.name
            }
            this.pic[data.code] = data
        }
    }
}
</script>

<style scoped>
.pic-list{
    margin-top: 20px;
}
.too-bottom{
    margin-bottom:100px;
}
.form-input{
    background-color: #ffffff;
    width:95%;
    height:106px;
    padding:0 2.5%;
}
.button-back{
    width:100%;
    height:90px;
    padding-top:40px;
    background-color: #ffffff;
}
</style>