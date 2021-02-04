<template>
    <div>
        <form class='goods-form'>
            <list-c v-for="(item,index) in list" :key="index" :ldata="item" @input="setInput" v-on:click.native="set_page(item.son)"></list-c>
        </form>
        <div class='goods-list-content-bottom'>
            <button-c v-for="(item,index) in button_data" :key="index" :bdata="item"></button-c>
        </div>

        <goods-type class='secondary-pages' v-if="page == 'goods_type'" @next="setNone"></goods-type>
        <search-list class='secondary-pages' v-if="page == 'search_list'" @searchlist="setNone"></search-list>
        <goods-pic class='secondary-pages' v-if="page == 'goods_pic'" @goodspic="setNone"></goods-pic>
        <ladder class='secondary-pages' v-if="page == 'ladder'" @ladder="setNone"></ladder>
        <area-c v-if="page == 'area'" @address="updateCity" @setBg="setNone"></area-c>
        <prop-c v-if="page == 'prop'" @setBg="setNone"></prop-c>
    </div>
</template>

<script>
import js_modules from './index.js';
export default js_modules
</script>

<style>
@import './index.css';
</style>