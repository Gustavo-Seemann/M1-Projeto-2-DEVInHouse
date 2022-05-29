import {Login, salvarDados} from './mutations.js'

export default {
    namespaced: true,
    mutations: {
        salvarDados,
        Login,
        },

    actions: {
        salvarDados({commit}, values){
            console.log(values)
            commit('salvarDados', values)
        },
        Login({commit}, values){
            commit('Login', values)
        }
    },
}