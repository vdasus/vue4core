import Vue from "vue";
import Vuex from "vuex";

import Testapp from "./modules/test/Testapp.vue";
import { store } from "./store/index";

Vue.use(Vuex);

let vue = new Vue({
    el: "#testapp",
    store,
    render: h => h(Testapp)
});