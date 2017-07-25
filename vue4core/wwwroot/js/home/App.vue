<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <h1>{{ $t("hello") }}</h1>
        <!--<h1> $t("message.hello") </h1>-->
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
        <!--<h2>пEssential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul> -->
    </div>
</template>
<i18n>
    {
    "en": {
    "hello": "hello world!"
    },
    "ru": {
    "hello": "привет мир！"
    }
    }
</i18n>
<script>
    import VueI18n from "vue-i18n";
    import { store } from './../common/store';
    import { Counter } from './../components/counter';

    export default {
        store,
        name: 'appint',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                pickedLang: "",
                counter: 0
            }
        },
        created: function () {
            this.$i18n.locale = "en";
        },
        methods: {
            incStore: function () {
                this.$store.commit('increment');
            },
            decStore: function () {
                this.$store.commit('decrement');
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
