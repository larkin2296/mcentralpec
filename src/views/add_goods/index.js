import ListC from '@/components/StyleC/ListC.vue'
import Goods from './index.json'

export default {
    components: { ListC },
    data() {
        return {
            list: Goods.goods
        }
    }
}