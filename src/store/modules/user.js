import { go_login, sms_login } from '@/api/user'
import { getToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    id: '',
    permission: '',
    factory: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ID: (state, id) => {
        state.id = id
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_PERMISSION: (state, permission) => {
        state.permission = permission
    },
    SET_FACTORY: (state, factory) => {
        state.factory = factory
    },
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { account, password } = userInfo
        return new Promise((resolve, reject) => {
            go_login({ account: account.trim(), password: password }).then(response => {
                const { data } = response.data

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                commit('SET_ROLES', data.role.role_id)
                commit('SET_NAME', data.base.name)
                commit('SET_AVATAR', data.base.headphoto)
                    // commit('SET_PERMISSION', per_mission)
                commit('SET_ID', data.base.user_id)
                commit('SET_TOKEN', data.base.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    smslogin({ commit }, userInfo) {
        const { phone, code } = userInfo
        return new Promise((resolve, reject) => {
            sms_login({ phone: phone, code: code }).then(response => {
                const { data } = response.data

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                commit('SET_ROLES', response.data.role.role_id)
                commit('SET_NAME', response.data.base.name)
                commit('SET_AVATAR', response.data.base.headphoto)
                    // commit('SET_PERMISSION', per_mission)
                commit('SET_ID', response.data.base.user_id)
                commit('SET_TOKEN', response.data.base.token)
                resolve(data)
            }).catch(error => {
                console.log(error)
                reject()
            })
        })
    },

    // user logout
    // logout({ commit, state }) {
    //     return new Promise((resolve, reject) => {
    //         // logout(state.token).then(() => {
    //         commit('SET_TOKEN', '')
    //         commit('SET_ROLES', [])
    //         removeToken()
    //         resetRouter()
    //         resolve()
    //             // }).catch(error => {
    //             //   reject(error)
    //             // })
    //     })
    // },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
    // 前端 登出
    FedLogOut({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    },

    // dynamically modify permissions
    // changeRoles({ commit, dispatch }, role) {
    //     return new Promise(async resolve => {
    //         const token = role + '-token'

    //         commit('SET_TOKEN', token)
    //         setToken(token)

    //         const { roles } = await dispatch('getInfo')

    //         resetRouter()

    //         // generate accessible routes map based on roles
    //         const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

    //         // dynamically add accessible routes
    //         router.addRoutes(accessRoutes)

    //         // reset visited views and cached views
    //         dispatch('tagsView/delAllViews', null, { root: true })

    //         resolve()
    //     })
    // }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}