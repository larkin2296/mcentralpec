<template>
    <div>
        <input type="radio" :id="name" :name="name" :value="value" />
        <label :for="title">{{title}}</label>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
		},
		title: {
			type: String,
			default: ''
		}
    }
}
</script>

<style scoped>
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
label{
	display: block;
	width: auto;
	margin-left: 5px;
	font-size: 24px;
}
</style>