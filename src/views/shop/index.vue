<template>
    <div class='page'>
        <div class='index-one'>
            <div class='index-one-search'>
                <search :width="search.width" :height="search.height" :placeholder="search.placeholder"></search>
                <areaa></areaa>
            </div>
            <div class='index-one-select'>
                <div class='index-one-select-list' v-for="(item,index) in select_list" :key="index" >
                    <div>{{item}}</div>
                    <img src="" />
                </div>
            </div>
        </div>
        <div class='content'>
            <div class='list'>
                <div class='list-left'>
                    <img src="" />
                </div>
                <div class='list-right'>
                    <div class='list-right-title'>

                    </div>
                    <div class='list-right-address'>

                    </div>
                    <div class='list-right-price'>

                    </div>
                    <div class='list-right-company'>
                        
                    </div>
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