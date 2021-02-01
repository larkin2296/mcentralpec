<template>
    <div>
        <div class='search-module' :style="'width:'+width+';height:'+height+';'+(center?'margin: 0 auto;':'')">
            <img class='search-module-img' src="img/search.png" /><input class='search-module-input' :placeholder="placeholder"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        placeholder: {
            type: String,
            default: ''
        },
        center: {
            type: Boolean
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.search-module{
    background:rgba(247,247,247,1);
    border-radius:10px;
    display: flex;
    align-items: center;
}
.search-module-img{
    width:33px;
    height:33px;
    margin-left:5px;
}
.search-module-input{
    width:80%;
    height:80%;
    border:none;
    margin-left:5px;
    background-color: #F7F7F7;
}
</style>