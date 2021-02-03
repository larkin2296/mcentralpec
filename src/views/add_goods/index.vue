<template>
    <div>
        <form class='goods-form'>
            <list-c v-for="(item,index) in list" :key="index" :ldata="item"></list-c>
        </form>
        <div class='goods-list-content-bottom'>
            <button-c v-for="(item,index) in button_data" :key="index" :bdata="item"></button-c>
        </div>
    </div>
</template>

<script>
import js_modules from './index.js';
export default js_modules
</script>

<style>
@import './index.css';
</style>