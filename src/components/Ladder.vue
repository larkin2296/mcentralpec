<template>
    <div class='ladder'>
        <div class='goods-type-top'>
            <img class='title-bar-back' @click="go_back" src="img/right-list.png" />
            <div class='title-bar-title'>阶梯价格</div>
        </div>
        <div class='ladder-list'>
            <div class='ladder-list-list'>
                <div class='list-c-left orange'>
                    优惠1<span class='goods-label'>满减</span>
                </div>
                <div class='list-c-right end'>
                    <img class="right" src="img/right-list.png" />
                </div>
            </div>
            <div class='ladder-list-list'>
                <div class='list-c-left'>
                    优惠数量
                </div>
                <div class='list-c-right'>
                    <input />
                </div>
            </div>
            <div class='ladder-list-list'>
                <div class='list-c-left'>
                    优惠价格
                </div>
                <div class='list-c-right'>
                    <input />
                </div>
            </div>
            <div class='ladder-list-list'>
                <div class='list-c-left'>
                    提货方式
                </div>
                <div class='list-c-right'>
                    <input />
                    <img class="right" src="img/right-list.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        window.scrollTo(0, 0)
        // this.fetchData()
    },
    methods: {
        go_back() {
            this.$emit('ladder',false)
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
.title-bar-title{
    width: 95%;
    height: 100px;
    text-align: center;
    font-size: 30px;
    line-height: 100px;
}
.goods-type-top{
    width: 98%;
    height: 100px;
    padding: 0 1%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.ladder{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.ladder-list{
    width: 95%;
    height: 330px;
    padding: 0 2.5%;
}
.ladder-list-top{
    height: 101px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.ladder-list-list{
    height: 101px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #E5E5E5;
}
.list-c-left{
    width: 40%;
    height: 100%;
    line-height: 140px;
    font-size: 26px;
}
.textarea-left{
    width: 100%;
}
.list-c-right{
    width:60%;
    height: 100px;
    line-height: 100px;
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
.end{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.orange{
    font-size: 28px;
    color: #FF4D00;
}
.goods-label {
    padding: 0px 5px;
    background-color: #FF7F24;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 35px;
    margin-left: 5px;
}
</style>