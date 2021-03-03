<template>
    <div class='app'>
        <!-- 搜索栏、首页图片、公告 -->
        <div class='index-one'>
            <div class='index-one-search'>
                <areaa></areaa>
                <search :width="search.width" :height="search.height" :placeholder="search.placeholder"></search>
            </div>
            <div class='index-one-swiper'>
                <swiper class='swiper' :list="pic_list"></swiper>
            </div>
            <div class='index-one-notice'>
                <div class='index-one-notice-left'>
                    <img src="img/index1.png" />
                </div>
                <div class='index-one-notice-right'>
                    <div class='index-one-notice-title'>
                        公告
                    </div>
                    <div class='index-one-notice-content'>
                        东明石油有限公司甲醇竞拍成功
                    </div>
                </div>
            </div>
        </div>
        <!-- 首页菜单 -->
        <div class='index-two'>
            <router-link class="index-two-meau" v-for="(item,index) in meau" :key="index" :to="item.path">
                <div class='index-two-meau-img'><img :src="'img/'+item.icon"/></div>
                <div class='index-two-meau-title'>{{item.name}}</div>
            </router-link>
        </div>
        <!-- 价格指数 -->
        <div class='index-three'>
            <div class='index-three-title'>价格指数</div>
            <div class='index-three-content' v-for="(item,index) in exponent" :key="index">
                <div class='index-three-content-title'>{{item.title}}</div>
                <div class='index-three-content-number'>
                    <div class='index-three-content-number-left'>{{item.number}}</div>
                    <div class='index-three-content-number-right'><img :src="'img/'+item.icon" /></div>
                </div>
                <div class='index-three-content-price'>{{item.price}}</div>
            </div>
        </div>
        <!-- 商品列表 -->
        <div class='index-four'>
            <tab-c :tabdata="tab_data" class='tab-data'></tab-c>
            <div class='index-four-goodslist'>
                <auction v-for="(item,index) in auction" :key="index"></auction>
            </div>
        </div>
        <!-- 广告位 -->
        <div class='index-five'>
            <swiper class='swiper-company' :list="company_pic"></swiper>
        </div>
        <!-- 企业展示 -->
        <div class='index-six'>
            <tab-c class='tab-data' :tabdata="tab_company"></tab-c>
            <div class='index-six-content'>
                <img class='index-six-content-company' v-for="(item,index) in company" :key="index" :src="item" />
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class='index-seven'>
            <div class='index-title-style'>
                    <img class='index-title-style-img' src="img/index2.png" />
                <div class='index-title-style-title'>猜你喜欢</div>
                    <img class='index-title-style-img' src="img/index3.png" />
            </div>
            <div class='index-seven-goodslist'>
                <good v-for="(item,index) in goods" :key="index"></good>
            </div>
        </div>
        <!-- 友情链接 -->
        <div class='index-eight'>
            <div class='index-title-style'>
                    <img class='index-title-style-img' src="img/index2.png" />
                <div class='index-title-style-title'>友情链接</div>
                    <img class='index-title-style-img' src="img/index3.png" />
            </div>
            <div class='index-eight-content'>
                <img class='index-six-content-link' v-for="(item,index) in link" :key="index" :src="item" />
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