import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./home/App.vue";

Vue.use(VueI18n);

let vue = new Vue({
    el: "#app",
    render: h => h(App)
});