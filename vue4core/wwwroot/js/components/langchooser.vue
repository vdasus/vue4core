<template>
    <div class="row">
        <div class="col-md-1">
            <input type="radio" id="en" value="en" v-model="pickedLang">
            <label for="one">En</label>
        </div>
        <div class="col-md-1">
            <input type="radio" id="ru" value="ru" v-model="pickedLang">
            <label for="two">Ru</label>
            <br>
        </div>
        <div class="col-md-1">
            <label>{{ lang }}</label>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import Vuex from "vuex";

    import { SET_LANG } from "./../store/mutation-types";

    Vue.use(Vuex);

    export default {
        name: "Langchooser",
        data() {
            return {
                pickedLang: ""
            };
        },
        created: function(){
            this.pickedLang = this.lang
        },
        computed: {
            lang: function () {
                return this.$store.state.lang;
            }
        },
        watch: {
            pickedLang: function (val) {
                this.$store.commit(SET_LANG, val);
            }
        }
    };
</script>