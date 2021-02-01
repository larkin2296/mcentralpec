import { go_login, get_SMS } from '@/api/user.js'
export default {
    data(){
        return{
            login_type: 0,
            loginForm: {},
            code: ''
        }
    },
    methods: {
        login() {
            var param = new Object
            param = this.loginForm
            go_login(param).then(res => {
                console.log(res)
            })
        },
        get_message() {
            if(this.loginForm.phone.length != 11 || this.loginForm.phone == ''){
                alert('填写完整')
            }else{
                var phone = new Object
                phone = this.loginForm.phone
                get_SMS(phone).then(res => {
                    console.log(res)
                })
            }
        },
        go_change(e){
            this.loginForm = {}
            this.login_type = e
        }
    },
}