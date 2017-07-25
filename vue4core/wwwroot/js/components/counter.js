import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
};