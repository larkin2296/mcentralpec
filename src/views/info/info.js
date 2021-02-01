import ListC from '@/components/StyleC/ListC.vue'
import Info from './info.json'

export default {
    components: { ListC },
    data() {
        return {
            list: Info
        }
    }
}