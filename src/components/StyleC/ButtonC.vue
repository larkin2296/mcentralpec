<template>
    <div :style="'width:'+bdata.width+';height:'+bdata.height+';text-align:center;line-height:'+bdata.height+';color:'+bdata.color+';background:'+bdata.background+';border-radius: '+bdata.radius+';font-size:'+bdata.font+';border:' + bdata.border + ';'">{{bdata.text}}</div>
</template>

<script>
export default {
    props: {
        bdata:{
            type: Object
        }
    },
    mounted() {

    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>