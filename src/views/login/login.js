import { get_SMS } from '@/api/user.js'
export default {
    data() {
        return {
            login_type: 0,
            loginForm: {},
            code: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('user/login', this.loginForm)
                .then(() => {
                    this.$router.push({ path: '/index' })
                })
                .catch(() => {})
        },
        smslogin() {
            this.$store.dispatch('user/smslogin', this.loginForm)
                .then(() => {
                    this.$router.push({ path: '/index' })
                })
                .catch(() => {})
        },
        get_message() {
            if (this.loginForm.phone.length != 11 || this.loginForm.phone == '') {
                alert('填写完整')
            } else {
                var phone = new Object
                phone = this.loginForm.phone
                get_SMS(phone).then(res => {
                    console.log(res)
                })
            }
        },
        go_change(e) {
            this.loginForm = {}
            this.login_type = e
        }
    },
}