import vue from "vue";
import Vuex from "vuex";

vue.use(Vuex);

const state={
    jokes:[],
    weather:null
}

const mutations={
    getJokes(state,val){
        state.jokes=val
    },
    getWeather(state,val){
        state.weather = val
    }
}

const actions ={
    changeJokes({commit},val){
        commit('getJokes',val)
    },
    changeWeather({commit},val){
        commit("getWeather",val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})