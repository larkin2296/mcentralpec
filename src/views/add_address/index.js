import ListC from '@/components/StyleC/ListC.vue'
import List from './index.json'

export default {
    components: { ListC },
    data() {
        return {
            list: List
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