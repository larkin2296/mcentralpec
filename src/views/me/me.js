import Meau from '@/components/Meau.vue'
import List from './me.json'
export default {
    components: { Meau },
    data() {
        return {
            meau_list: List.meau,
            listdata: List.listdata
        }
    }
}