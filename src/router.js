import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
        path: '/',
        component: Layout,
        redirect: '/index',
        name: 'Index',
        children: [{
                path: '/index',
                component: () =>
                    import ('@/views/index/index.vue'),
                name: 'Index',
                meta: { title: '首页', icon: 'index.png' }
            },
            {
                path: '/types',
                component: () =>
                    import ('@/views/types/type.vue'),
                name: 'Types',
                meta: { title: '分类', icon: 'type.png' }
            },
            {
                path: '/release',
                component: () =>
                    import ('@/views/release/release.vue'),
                name: 'Release',
                meta: { title: '发布', icon: 'release.png' }
            },
            {
                path: '/shopcart',
                component: () =>
                    import ('@/views/shopcart/shopcart.vue'),
                name: 'Shopcart',
                meta: { title: '购物车', icon: 'shopcart.png' }
            },
            {
                path: '/me',
                component: () =>
                    import ('@/views/me/me.vue'),
                name: 'Me',
                meta: { title: '我的', icon: 'me.png' }
            }
        ]
    },
    {
        path: '/login',
        component: Layout,
        redirect: '/login/index',
        name: 'Login',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/login/login.vue'),
            name: 'Index',
            meta: { title: '登录' }
        }]
    },
    {
        path: '/register',
        component: Layout,
        redirect: '/register/index',
        name: 'Register',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/register/register.vue'),
            name: 'Index',
            meta: { title: '注册' }
        }]
    },
    {
        path: '/info',
        component: Layout,
        redirect: '/info/index',
        name: 'Info',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/info/info.vue'),
            name: 'Index',
            meta: { title: '个人信息' }
        }]
    },
    {
        path: '/cert',
        component: Layout,
        redirect: '/cert/index',
        name: 'Cert',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/cert/cert.vue'),
            name: 'Index',
            meta: { title: '认证中心' }
        }]
    },
    {
        path: '/cert_driver',
        component: Layout,
        redirect: '/cert_driver/index',
        name: 'CertDriver',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/cert_driver/index.vue'),
            name: 'Index',
            meta: { title: '司机认证' }
        }]
    },
    {
        path: '/cert_logistic',
        component: Layout,
        redirect: '/cert_logistic/index',
        name: 'CertLogistic',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/cert_logistic/index.vue'),
            name: 'Index',
            meta: { title: '物流认证' }
        }]
    },
    {
        path: '/cert_warehouse',
        component: Layout,
        redirect: '/cert_warehouse/index',
        name: 'CertWarehouse',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/cert_warehouse/index.vue'),
            name: 'Index',
            meta: { title: '仓储认证' }
        }]
    },
    {
        path: '/cert_supplier',
        component: Layout,
        redirect: '/cert_supplier/index',
        name: 'CertSupplier',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/cert_supplier/index.vue'),
            name: 'Index',
            meta: { title: '供应商认证' }
        }]
    },
    {
        path: '/address',
        component: Layout,
        redirect: '/address/index',
        name: 'Address',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/address/index.vue'),
            name: 'Index',
            meta: { title: '收货地址' }
        }, {
            path: 'add',
            component: () =>
                import ('@/views/add_address/index.vue'),
            name: 'Add',
            meta: { title: '新增地址' }
        }]
    },
    {
        path: '/goods',
        component: Layout,
        redirect: '/goods/index',
        name: 'Goods',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/goods/index.vue'),
            name: 'Index',
            meta: { title: '商品列表', right: '发布', path: '/goods/add' }
        }, {
            path: 'add',
            component: () =>
                import ('@/views/add_goods/index.vue'),
            name: 'Add',
            meta: { title: '新增商品' }
        }]
    }
]
const createRouter = () => new Router({
    //mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router