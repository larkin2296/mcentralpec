<template>
    <div class='register'>
        <form :model="form" ref="form">
        <div class='login-form' v-if="show == 1">
            <div class='input-c'>
                <input v-model="form.phone" placeholder="请输入手机号" />
            </div>
            <div class='login-form-code'>
                <div class='input-c login-form-short'>
                    <input v-model="code" placeholder="请输入验证码" />
                </div>
                <div class='login-form-button' @click="get_message()">
                    <span>获取验证码</span>
                </div>
            </div>
            <div class='choose-role'>
                <div class='choose-role-title'>请选择您的角色(单选)</div>
                <div class='choose-role-content'>
                    <div :class="'tag-default ' + (choose==index?'active':'')" v-for="(item,index) in roles" :key="index" @click="choose_role(index)">{{item.name}}</div>
                </div>
            </div>
            <div class='confirm-button dis-top' @click="go_next()">下一步</div>
            <div class='confirm-agree'>
                <div class='confirm-agree-content'><radio-c class='confirm-agree-radio' :value="check_agree" :name="agree"></radio-c>已阅读并同意 《中华石化网平台服务协议》</div>
            </div>
        </div>
        <form-c class='form' v-if="show == 0" :formdata="roles_data" @next="setNext"></form-c>
        </form>
    </div>
</template>

<script>
import js_modules from './register.js';
export default js_modules
</script>

<style>
@import './register.css';
</style>