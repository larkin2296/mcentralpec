import Search from '@/components/Search.vue'
import TabC from '@/components/StyleC/TabC.vue'
import ButtonC from '@/components/StyleC/ButtonC.vue'
import List from './index.json'

export default {
    components: { Search, TabC, ButtonC },
    data() {
        return {
            list: List,
            search: {
                width: '95%',
                height: '42px',
                placeholder: '请输入品名、品牌',
                center: true
            },
            tab_data: ['在售中', '已下架', '回收站'],
        }
    },
    created() {

    },
    methods: {
        setNext(e) {
            if (e.last == false) {
                Object.assign(this.form, e.data)
            } else if (e.last == true) {
                Object.assign(this.form, e.data)
                    // go_register(this.form).then(res => {
                    //     console.log(res)
                    // })
            }
        }
    },
}