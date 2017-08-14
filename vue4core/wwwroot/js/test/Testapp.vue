<template>
    <div id="testapp">
        <h1>{{ msg }}</h1>
        <h1>{{ $t("hello") }}</h1>
        <h1>{{ testmessage }}</h1>

        <input v-model="msg" type="search" placeholder="search...">

        <br />
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
        </div>
        <span>Picked: {{ pickedLang }}</span>
        <counter></counter>
        <button type="button" v-on:click="incStore"> Inc </button>
        <button type="button" v-on:click="decStore"> Dec </button>
    </div>
</template>
<i18n>
    {
    "en": {
    "hello": "hello test world!"
    },
    "ru": {
    "hello": "привет тест мир！"
    }
    }
</i18n>
<script>
    import { Counter } from './../components/counter';
    import axios from 'axios';

    export default {
        name: 'testapp',
        data() {
            return {
                msg: 'Welcome to Your Test Vue.js App',
                pickedLang: "en",
                counter: 0,
                testmessage: ""
            }
        },
        created: function () {
            this.$i18n.locale = "en";
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
                axios.get("/Test/GetTestResponse/")
                    .then(response => { this.testmessage = response.data })
                    .catch(e => { this.errors.push(e); });
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
