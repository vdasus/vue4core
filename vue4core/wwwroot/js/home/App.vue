<template>
    <div id="app">
        <div class="row">
            <h1>{{ msg }}</h1>
            <Langchooser></Langchooser>
            <div>
                <a href="http://localhost:63686/Test">Main playground here</a>
            </div>
        </div>
    </div>
</template>
<i18n src="../lang/home/App.json" />
<script>
    import axios from 'axios';
    //import { mapState } from 'vuex'
    import Langchooser from "./../components/langchooser.vue";

    export default {
        name: 'appint',
        data() {
            return {
                msg: "Hello from App.vue",
            }
        },
        components: {
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
