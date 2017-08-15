<template>
    <div id="app">
        <div class="row">
            <h1>{{ currentMsg }}</h1>
            <h1>{{ msg }}</h1>
        </div>
        <div class="row">
            <h1>{{ $t("hello") }}</h1>
        </div>
        <div class="row">
            <span>{{ testmessage }}</span>
        </div>

       <input v-model="msg" type="search" v-bind:placeholder="$t('search')" >

        <br />
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
        <div class="row">
            <span>{{ $t("picked") }}: {{ pickedLang }}</span>
            <counter></counter>
        </div>
        <div class="row">
            <button type="button" v-on:click="incStore"> {{ $t("inc") }} </button>
            <button type="button" v-on:click="decStore"> {{ $t("dec") }} </button>
        </div>

        <div class="row">
            <input type="checkbox" id="checkbox" v-model="isDelayed">
            <label for="checkbox">{{ $t("isdelay") }}</label>

            <input type="checkbox" id="checkbox" v-model="isCached">
            <label for="checkbox">{{ $t("iscache") }}</label>
            <br /><label>Locale: {{ this.$i18n.locale }}</label>
        </div>

        <div class="row">
            <button type="button" v-on:click="getapidata"> {{ $t("reload") }} </button>
        </div>
    </div>
</template>
<i18n>
    {
     "en-US": {
      "htitle": "Home page title message",
      "hello": "hello world!",
      "iscache": "Cached",
      "isdelay": "Delayed",
      "inc": "Inc",
      "dec": "Dec",
      "reload": "Reload",
      "picked": "picked ",
      "search": "search ..."
     },
    "ru-RU": {
      "htitle": "Привет с домашней страницы",
      "hello": "привет мир！",
      "iscache": "Кешировать",
      "isdelay": "Задержка",
      "inc": "Плюс",
      "dec": "Минус",
      "reload": "Обновить",
      "picked": "выбрано ",
      "search": "искать ..."
     }
    }
</i18n>
<script>
    import { Counter } from './../components/counter';
    import axios from 'axios';
    import { mapState } from 'vuex'

    export default {
        name: 'appint',
        data() {
            return {
                msg: "",
                pickedLang: "en-US",
                testmessage: ""
            }
        },
        created: function () {
            this.$i18n.locale = "en-US";
            this.getapidata();
        },
        methods: {
            incStore: function () {
                this.$store.commit('increment');
            },
            decStore: function () {
                this.$store.commit('decrement');
            },
            getapidata: function () {
                axios.get("/Home/GetTestResponse" + this.cachePostfix + this.delaySec)
                    .then(response => { this.testmessage = response.data })
                    .catch(e => { this.errors.push(e); });
            }
        },
        computed: {
            isDelayed: {
                get() {
                    return this.$store.state.isDelayed
                },
                set(value) {
                    this.$store.commit('setDelay', value)
                }
            },
            isCached: {
                get() {
                    return this.$store.state.isCached
                },
                set(value) {
                    this.$store.commit('setCached', value)
                }
            },
            currentMsg: function () {
                return this.$t('htitle', this.$i18n.locale);
            },
            delaySec: function () {
                return this.isDelayed ? 2 : 0;
            },
            cachePostfix: function () {
                return this.isCached ? "Cached/" : "/";
            }
        },
        watch: {
            pickedLang: function (val) {
                this.$i18n.locale = val;
            }
        },
        components: {
            Counter
        }
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
