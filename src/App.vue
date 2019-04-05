<template>
    <div id="app">

        <b-alert variant="success" show>
            <b-button type="submit" style="margin-left:5px" :variant="[state?'primary':'danger']" v-on:click="morse2textclick">Morse To Text</b-button>
            <b-button type="submit" style="margin-left:5px" :variant="[!state?'primary':'danger']" v-on:click="text2morseclick">Text To Mors</b-button>
        </b-alert>

        <div v-if="state">
            <text2morse title="text2morse" label1="Text" label2="Morse" />
        </div>

        <div v-else>
            <morse2text title="morse2text" label1="Morse" label2="Text" />
        </div>

    </div>
</template>

<script>

    <script>
        import Home from './components/Home.vue';

    export default {
            name: 'app',
        components: {
            Home
        }
        };
</script>

<style>
</style>
