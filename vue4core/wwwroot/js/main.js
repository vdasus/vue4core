import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import App from "./modules/home/App.vue";
import { store } from "./store/index";

Vue.use(Vuex);
Vue.use(VueI18n);

let vue = new Vue({
    el: "#app",
    store,
    render: h => h(App)
});