require("es6-promise").polyfill();

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        isDelayed: false
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        setDelay(state, isdelay) {
            state.isDelayed = isdelay;
        }
    }
});