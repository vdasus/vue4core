<template>
    <div class="row">
    <div class="col-md-1">
    <input type="radio" id="en-US" value="en-US" v-model="pickedLang">
    <label for="one">En</label>
    </div>
    <div class="col-md-1">
    <input type="radio" id="ru-RU" value="ru-RU" v-model="pickedLang">
    <label for="two">Ru</label>
    <br>
    </div>
    </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default {
    name: "Langchooser",
    data() {
        return {
            pickedLang: "en-US"
        };
    },
    watch: {
        pickedLang: function (val) {
            this.$i18n.locale = val;
        }
    }
};
</script>