<template>
    <div class='page'>
        <search :width="search.width" :height="search.height" :placeholder="search.placeholder" :center="search.center"></search>
        <tab-c :tabdata="tab_data" class='tab-data'></tab-c>
        <div class='goods-list'>
            <div class='goods-list-content'>
                <div class='goods-list-content-top'>
                    <div class='goods-list-content-top-left'></div>
                    <div class='goods-list-content-top-right'>
                        <div class='goods-list-content-top-right-title'></div>
                        <div class='goods-list-content-top-right-center'>
                            <div class='ins-list'></div>
                            <div class='ins-list'></div>
                            <div class='ins-list'></div>
                            <div class='ins-list'></div>
                        </div>
                    </div>
                </div>
                <div class='goods-list-content-bottom'>
                    <button-c></button-c>
                    <button-c></button-c>
                    <button-c></button-c>
                    <button-c></button-c>
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