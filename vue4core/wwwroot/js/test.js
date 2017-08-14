import Vue from "vue";
// ReSharper disable once InconsistentNaming
import VueI18n from "vue-i18n";
import Testapp from "./test/Testapp.vue";

Vue.use(VueI18n);

let vue = new Vue({
    el: "#testapp",
    render: h => h(Testapp)
});