import Vue from "vue";
import Vuex from "vuex";

import App from "./modules/home/App.vue";
import { store } from "./store/index";

Vue.use(Vuex);

let vue = new Vue({
    el: "#app",
    store,
    render: h => h(App)
});