<template>
    <div id="app" >

        <b-alert variant="success" show>
            <b-button type="submit" style="margin-left:5px" :variant="[state?'info':'success']" v-on:click="morse2textclick">Morse To Text</b-button>
            <b-button type="submit" style="margin-left:5px" :variant="[!state?'info':'success']" v-on:click="text2morseclick">Text To Mors</b-button>
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

    import text2morse from './components/text2morse.vue';
    import morse2text from './components/morse2text.vue';

    export default {
        name: 'app',
        components: {
            text2morse,
            morse2text,
        },
        props: {
            state: false
        },
        methods: {
            morse2textclick: function () {
                this.state = false
            },
            text2morseclick: function () {
                this.state = true,
                    this.changeColor = !this.changeColor;
            }
        },

    };
</script>

<style>


    #app {
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        margin-top:10px
    }


</style>
