<template>
    <div class='login'>
        <div class='login-title'>欢迎登陆！</div>
        <form ref="loginForm" :model="loginForm">
            <div class='login-form' v-if="login_type == 0">
                <div class='input-c'>
                    <input v-model="loginForm.phone" placeholder="请输入手机号" />
                </div>
                <div class='login-form-code'>
                    <div class='input-c login-form-short'>
                        <input v-model="loginForm.code" placeholder="请输入验证码" />
                    </div>
                    <div class='login-form-button' @click="get_message()">
                        <span>获取验证码</span>
                    </div>
                </div>
                <div class='confirm-button dis-top' @click="login()">登录</div>
                <div class='login-bottom' @click="go_change(1)">账号密码登录</div>
            </div>
            <div  class='login-form' v-if="login_type == 1">
                <div class='input-c'>
                    <input v-model="loginForm.name" placeholder="请输入账号" />
                </div>
                <div class='input-c'>
                    <input v-model="loginForm.pwd" placeholder="请输入密码" />
                </div>
                <div class='confirm-button dis-top'>登录</div>
                <div class='login-bottom'>
                    <div class='tag-c' @click="go_change(0)">手机快捷登录</div>
                    <div class='tag-c' @click="go_change(2)">忘记密码</div>
                </div>
            </div>
            <div  class='login-form' v-if="login_type == 2">
                <div class='input-c'>
                    <input v-model="loginForm.phone" placeholder="请输入手机号" />
                </div>
                <div class='login-form-code'>
                    <div class='input-c login-form-short'>
                        <input placeholder="请输入验证码" />
                    </div>
                    <div class='login-form-button'>
                        <span>获取验证码</span>
                    </div>
                </div>
                <div class='input-c'>
                    <input placeholder="请输入新密码" />
                </div>
                 <div class='input-c'>
                    <input placeholder="请再次确认密码" />
                </div>
                <div class='confirm-button dis-top'>确认</div>
                <div class='login-word'>
                    1、为了您的账户安全，新旧密码必须不同<br />
                    2、6-20位字符(字母 数字 符号)，不能只使用一种字符，区别
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import js_modules from './login.js';
export default js_modules
</script>

<style>
@import './login.css';
</style>