<template>
    <div class='page'>
        <search :width="search.width" :height="search.height" :placeholder="search.placeholder" :center="search.center"></search>
        <tab-c :tabdata="tab_data" class='tab-data'></tab-c>
        <div class='goods-list'>
            <div class='goods-list-content'>
                <div class='goods-list-content-top'>
                    <div class='goods-list-content-top-left'>
                        <img src="img/sucai/12.png" />
                        <img src="img/sucai/13.png" />
                    </div>
                    <div class='goods-list-content-top-right'>
                        <div class='goods-list-content-top-right-title'>烷基化异辛烷<span class='goods-label'>满减</span><div class='day'>2天前</div></div>
                        <div class='goods-list-content-top-right-center'>
                            <div class='ins-list'>货号：SZ003993</div>
                            <div class='ins-list'>库存：500</div>
                            <div class='ins-list'>单价：￥100/吨</div>
                            <div class='ins-list'>销售：400</div>
                        </div>
                    </div>
                </div>
                <div class='goods-list-content-bottom'>
                    <button-c v-for="(item,index) in button_data" :key="index" :bdata="item"></button-c>
                </div>
            </div>
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