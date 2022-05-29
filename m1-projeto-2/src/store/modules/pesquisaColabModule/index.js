import {atualizaDadosColab, ColabFiltered } from "./mutations"

export default {
    namespaced: true,
    state: {
        colaboradores: [],
        valorProcura: "",
        valores: [],
    },
    mutations: { 
        atualizaDadosColab,
        ColabFiltered
    },
    actions: {
        atualizaDadosColab({commit}) {
            commit('atualizaDadosColab');
        },
        ColabFiltered({commit}, NewValue) {
            commit('ColabFiltered', NewValue);
        }
    },
}