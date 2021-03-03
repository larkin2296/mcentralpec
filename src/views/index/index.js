import Search from '@/components/Search.vue'
import Areaa from '@/components/Area.vue'
import Swiper from '@/components/StyleC/SwiperC.vue'
import TabC from '@/components/StyleC/TabC.vue'
import Auction from '@/components/Auction.vue'
import Good from '@/components/Goods.vue'
export default {
    components: { Search, Areaa, Swiper, TabC, Auction, Good },
    data() {
        return {
            meau: [{ name: '竞拍', icon: 'meau1.png', path: '' }, { name: '竞采', icon: 'meau2.png', path: '' }, { name: '商城', icon: 'meau3.png', path: '/shop/index' }, { name: '物流', icon: 'meau4.png', path: '' }, { name: '全部', icon: 'meau5.png', path: '' }],
            exponent: [{ title: '柴油', number: '0%', icon: 'rectangle.png', price: '6281.5' }, { title: 'WTI原油', number: '+0.2%', icon: 'up.png', price: '6281.5' }, { title: '布伦特原油', number: '-0.08%', icon: 'down.png', price: '6281.5' }],
            tab_data: ['竞价动态', '采购动态', '新品上线', '热销商品'],
            tab_company: ['VIP企业', '入驻企业', '化工园区'],
            company: ['img/sucai/2.png', 'img/sucai/3.png', 'img/sucai/4.png', 'img/sucai/5.png'],
            search: {
                width: '289px',
                height: '36px',
                placeholder: '请输入品名、品牌',
                center: false
            },
            auction: [1, 2, 3],
            goods: [1, 2, 3],
            pic_list: ['demo1.png', 'index1.png', 'index2.png'],
            company_pic: ['/sucai/1.png'],
            link: ['img/sucai/6.png', 'img/sucai/7.png', 'img/sucai/8.png', 'img/sucai/9.png', 'img/sucai/10.png', 'img/sucai/11.png']
        }
    }
}