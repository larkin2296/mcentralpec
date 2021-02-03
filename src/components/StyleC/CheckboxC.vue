<template>
    <div>
        <input type="checkbox" :id="name" :name="name" :value="value" />
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
label{
	font-size: 24px;
	margin-left: 5px;
}
</style>