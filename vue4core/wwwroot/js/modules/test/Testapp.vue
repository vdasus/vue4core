<template>
    <div id="testapp">
        <div class="row">
            <h1>{{ currentMsg }}</h1>
        </div>
        <div class="row">
            <h1>{{ $t("hello") }}</h1>
        </div>
        <div class="row">
            <span>{{ testmessage }}</span>
        </div>
        <input v-model="msg" type="search" v-bind:placeholder="$t('search')">
        <label v:show="errors">{{ errors }}</label>
        <br />
        <Langchooser></Langchooser>
        <div class="row">
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
        </div>
        <div class="row">
            <button type="button" v-on:click="getapidata"> {{ $t("reload") }} </button>
        </div>
    </div>
</template>
<i18n src="./Testapp.lang.json" />
<script>
    import { Counter } from './../../components/counter';
    import Langchooser from "./../../components/langchooser.vue";
    import { CNT_INCREMENT, CNT_DECREMENT, CNT_SET_DELAY, CNT_SET_CACHED } from "./../../store/const-types";
    import axios from 'axios';
    //import { mapState } from 'vuex'

    export default {
        name: 'testapp',
        data() {
            return {
                msg: "",
                testmessage: "",
                errors: []
            }
        },
        created: function () {
            this.$i18n.locale = this.lang;
            this.getapidata();
        },
        methods: {
            incStore: function () {
                this.$store.commit(CNT_INCREMENT);
            },
            decStore: function () {
                this.$store.commit(CNT_DECREMENT);
            },
            getapidata: function () {
                axios.get("/Test/GetTestResponse" + this.cachePostfix + this.delaySec)
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
                    this.$store.commit(CNT_SET_DELAY, value)
                }
            },
            isCached: {
                get() {
                    return this.$store.state.isCached
                },
                set(value) {
                    this.$store.commit(CNT_SET_CACHED, value)
                }
            },
            currentMsg: function () {
                return this.$t('htitle', this.lang);
            },
            delaySec: function () {
                return this.isDelayed ? 2 : 0;
            },
            cachePostfix: function () {
                return this.isCached ? "Cached/" : "/";
            },
            lang: function () {
                return this.$store.state.lang;
            }
        },
        watch: {
            lang: function () {
                this.$i18n.locale = this.lang;
            }
        },
        components: {
            Counter,
            Langchooser
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
