<template>
    <div class='me'>
        <div class='me-set'>
            <div class='me-set-list'>
                <img src="img/set.png" />
            </div>
            <div class='me-set-list'>
                <img src="img/message.png" />
            </div>
        </div>
        <div class='me-info'>
            <div class='me-info-avatar'>
                <img src="img/label10.png" />
            </div>
            <div class='me-info-right'>
                <div class='me-info-title'>
                    西安技术研发中心
                </div>
                <div class='me-info-type'>
                    供应商
                </div>
            </div>
        </div>
        <div class='me-money'>
            <div class='me-money-list'>
                <div class='me-money-list-left'>余额</div>
                <div class='me-money-list-right'>123456.00</div>
            </div>
            <div class='me-money-list'>
                <div class='me-money-list-left'>积分</div>
                <div class='me-money-list-right'>123456</div>
            </div>
        </div>
        <div class='me-tip'>
            <img src="img/light.png" />
            <span>您需要完成企业认证，才能报价和挂货!</span>
        </div>
        <div class='me-meau'>
            <router-link class="me-meau-list" v-for="(item,index) in meau_list" :key="index" :to="{path:item.url}">
                <div class='me-meau-list-top'>
                    <img :src="item.pic" />
                </div>
                <div class='me-meau-list-center'>
                    {{item.word}}
                </div>
            </router-link>
        </div>
        <meau v-for="(item,index) in listdata" :key="index" :meaulist="item"></meau>
    </div>
</template>

<script>
import js_modules from './me.js';
export default js_modules
</script>

<style>
@import './me.css';
.me{
    width: 100%;
    height: auto;
}
</style>