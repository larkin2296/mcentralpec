<template>
    <div class='page'>
        <div class='show-list'>
            <div class='list'>
                <div class='list-top'>
                    <div class='list-top-list'>张先生</div>
                    <div class='list-top-list'>15248621549</div>
                    <div class='list-top-label'>默认</div>
                    <img class='list-top-edit' src="img/edit.png" />
                </div>
                <div class='list-top-bottom'>
                    上海市浦东新区松林路97弄39号
                </div>
            </div>
            <router-link :to="{path: '/address/add'}">
            <div class='confirm-button dis-top'>新增地址</div>
            </router-link>
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