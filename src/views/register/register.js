import RadioC from '@/components/StyleC/RadioC.vue'
import FormC from '@/components/StyleC/FormC.vue'
import NewUser from './register.json'
import { get_SMS, check_SMS, go_register } from '@/api/register'
export default {
    components: { RadioC, FormC },
    data() {
        return {
            roles: [{ name: '上游供应商', value: 0 }, { name: '中间贸易商', value: 0 }, { name: '下游客户', value: 1 }, { name: '物流', value: 2 }, { name: '仓储', value: 3 }, { name: '司机', value: 4 }],
            check_agree: '1',
            agree: '',
            choose: 0,
            role: 0,
            show: 1,
            roles_data: {},
            form: {},
            code: ''
        }
    },
    created() {},
    methods: {
        get_message() {
            var phone = new Object
            phone = this.form.phone
            get_SMS(phone).then(res => {
                console.log(res)
            })
        },
        choose_role(index) {
            this.choose = index
        },
        go_next() {
            var param = new Object
            param.phone = this.form.phone
            param.code = this.code
            let user_data = NewUser[this.roles[this.choose].value]
            this.roles_data = user_data
            this.form.role = user_data.name
            this.show = 0
            check_SMS(param).then(res => {
                if (res.code == 0) {
                    let user_data = NewUser[this.roles[this.choose].value]
                    this.roles_data = user_data
                    this.form.role = user_data.name
                    this.show = 0
                } else {
                    alert(res.msg)
                }
            })
        },
        setNext(e) {
            if (e.last == false) {
                Object.assign(this.form, e.data)
            } else if (e.last == true) {
                Object.assign(this.form, e.data)
                go_register(this.form).then(res => {
                    console.log(res)
                })
            }
        }
    },
}