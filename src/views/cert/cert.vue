<template>
    <div class='page'>
        <div class='title'>请选择你的身份</div>
        <div class='cert'>
        <router-link class='list' :to="{path:'/cert_supplier'}">
            <div class='list-label'>未认证</div>
            <div class='list-img'><img src="img/c_supplier.png" /></div>
            <div class='list-title'>供应商认证</div>
        </router-link>
        <router-link class='list' :to="{path:'/cert_logistic'}">
            <div class='list-label'>未认证</div>
            <div class='list-img'><img src="img/c_logistics.png" /></div>
            <div class='list-title'>物流公司认证</div>
        </router-link>
        <router-link class='list' :to="{path:'/cert_warehouse'}">
            <div class='list-label'>未认证</div>
            <div class='list-img'><img src="img/c_ware.png" /></div>
            <div class='list-title'>仓储认证</div>
        </router-link>
        <router-link class='list' :to="{path:'/cert_driver'}">
           <div class='list-label'>未认证</div>
            <div class='list-img'><img src="img/c_driver.png" /></div>
            <div class='list-title'>司机认证</div>
        </router-link>
        </div>
    </div>
</template>

<script>
import js_modules from './cert.js';
export default js_modules
</script>

<style>
@import './cert.css';
</style>