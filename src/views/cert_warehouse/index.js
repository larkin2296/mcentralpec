import FormC from '@/components/StyleC/FormC.vue'
import List from './index.json'

export default {
    components: { FormC },
    data() {
        return {
            roles_data: List
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