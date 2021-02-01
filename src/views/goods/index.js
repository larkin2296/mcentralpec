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
            button_data: [{
                width: '80px',
                height: '32px',
                color: '#fff',
                background: 'linear-gradient(-90deg, #F7B443 0%, #FA802E 100%)',
                text: '新建提单',
                font: '14px',
                radius: '5px'
            }, {
                width: '80px',
                height: '32px',
                color: '#000',
                background: '#fff',
                text: '编辑',
                font: '14px',
                radius: '5px',
                border: '1px solid #CCCCCC'
            }, {
                width: '80px',
                height: '32px',
                color: '#000',
                background: '#fff',
                text: '下架',
                font: '14px',
                radius: '5px',
                border: '1px solid #CCCCCC'
            }, {
                width: '80px',
                height: '32px',
                color: '#000',
                background: '#fff',
                text: '移除',
                font: '14px',
                radius: '5px',
                border: '1px solid #CCCCCC'
            }]
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