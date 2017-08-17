//require("es6-promise").polyfill(); or import "es6-promise/auto";

import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import VueI18n from "vue-i18n";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);
Vue.use(VueI18n);

export const store = new Vuex.Store({
    state: {
        count: 0,
        isDelayed: false,
        isCached: true,
        lang: "ru"
    },
    created: function(){
        this.$i18n.locale = lang;
    },
    watch: {
        lang: function (){
            this.$i18n.locale = lang;
        }
    },
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV !== "production"
});