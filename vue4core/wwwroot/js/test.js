import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import Testapp from "./test/Testapp.vue";
import { store } from "./common/store";

Vue.use(Vuex);
Vue.use(VueI18n);

let vue = new Vue({
    el: "#testapp",
    store,
    render: h => h(Testapp)
});