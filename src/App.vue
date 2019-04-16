<template>
    <div id="app">

        <b-alert variant="success" show>
            <b-button type="submit" style="margin-left:5px" :variant="[state?'info':'success']" v-on:click="morse2textclick">Morse To Text</b-button>
            <b-button type="submit" style="margin-left:5px" :variant="[!state?'info':'success']" v-on:click="text2morseclick">Text To Mors</b-button>
        </b-alert>

        <div v-if="state">
            <text2morse />
        </div>

        <div v-else>
            <morse2text />
        </div>

        <!-- Modal Component -->
        <b-modal id="modal-prevent"
                 ref="modal"
                 title="Submit your name"
                 @ok="handleOk"
                 @shown="clearName">
            <form @submit.stop.prevent="handleSubmit">
                <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
            </form>
        </b-modal>

    </div>
</template>


<script>

	import io from 'socket.io-client';
    import text2morse from './components/text2morse.vue';
    import morse2text from './components/morse2text.vue';

    export default {
        name: 'app',
        data() {
            return {
                name: '',
                socket: io('localhost:3001')
            }
        },
        components: {
            text2morse,
            morse2text,
        },
        props: {
            state: false
        },
        methods: {
            sendMessage() {
                alert(this.name)

                this.socket.emit('SEND_MESSAGE', {
                    user: this.name
                });
			},
            morse2textclick: function () {
                this.state = false
            },
            text2morseclick: function () {
                this.state = true,
                    this.changeColor = !this.changeColor;
            }, handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                if (!this.name) {
                    alert('Please enter your name')
                } else {
                    this.handleSubmit()
                }
            },
            handleSubmit() {
                
                this.$nextTick(() => {
                    // Wrapped in $nextTick to ensure DOM is rendered before closing
                    this.$refs['modal'].hide()
                    this.sendMessage()
                })
            }
        },
        mounted() {
            window.addEventListener('load', () => {
                this.$refs['modal'].show()
            })
        }
    };
</script>

<style>
    #app {
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 10px
    }
</style>