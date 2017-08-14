import Vue from "vue";
import VueI18n from "vue-i18n";
import Testapp from "./test/Testapp.vue";

Vue.use(VueI18n);

let vue = new Vue({
    el: "#testapp",
    render: h => h(Testapp)
});