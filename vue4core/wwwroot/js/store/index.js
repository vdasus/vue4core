﻿//require("es6-promise").polyfill(); or import "es6-promise/auto";

import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        isDelayed: false,
        isCached: true
    },
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV !== "production"
});