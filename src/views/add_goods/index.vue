<template>
    <div>
        <form class='goods-form'>
            <list-c v-for="(item,index) in list" :key="index" :ldata="item"></list-c>
        </form>
    </div>
</template>

<script>
import js_modules from './index.js';
export default js_modules
</script>

<style>
@import './index.css';
</style>