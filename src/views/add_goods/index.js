import ListC from '@/components/StyleC/ListC.vue'
import ButtonC from '@/components/StyleC/ButtonC.vue'
import Goods from './index.json'

export default {
    components: { ListC, ButtonC },
    data() {
        return {
            list: Goods.goods,
            button_data: [{
                width: '120px',
                height: '50px',
                color: '#fff',
                background: 'linear-gradient(-90deg, #F7B443 0%, #FA802E 100%)',
                text: '发布相似商品',
                font: '14px',
                radius: '5px'
            }, {
                width: '120px',
                height: '50px',
                color: '#fff',
                background: '#FF5401',
                text: '保存',
                font: '14px',
                radius: '5px'
            }]
        }
    }
}