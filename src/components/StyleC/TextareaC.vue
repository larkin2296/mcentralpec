<template>
    <div>
        <input type="textarea" :id="tdata.name" :name="tdata.name" :value="tdata.currentValue" :placeholder="tdata.placeholder" />
    </div>
</template>

<script>
export default {
    props: {
        tdata: {
            type: Object
        }
    }
}
</script>

<style scoped>
input[type=textarea]{
    width: 100%;
    height: 140px;
    border:none;
    background-color: #F5F5F5;
}
</style>