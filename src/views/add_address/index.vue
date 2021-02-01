<template>
    <div class='info'>
        <form class='info-form'>
            <list-c v-for="(item,index) in list.normal" :key="index" :name="item.name" :currentValue="item.currentValue" :title="item.title" :placeholder="item.placeholder" :type="item.type" :list="item.list"></list-c>
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