import Search from '@/components/Search.vue'
import Areaa from '@/components/Area.vue'

export default {
    components: { Search, Areaa },
    data() {
        return {
            search: {
                width: '289px',
                height: '36px',
                placeholder: '请输入品名、品牌',
                center: false
            },
        }
    }
}