<template>
    <div style="margin:5px">
        <b-form @reset="onReset">

            <b-form-group id="input-group-1"
                          :label=label1
                          label-for="input-1">
                <b-form-textarea id="textarea-no-auto-shrink"
                                 rows="3"
                                 v-model:value="message1"
                                 max-rows="8"
                                 no-auto-shrink></b-form-textarea>
            </b-form-group>

            <b-button style="margin-bottom:5px" variant="primary" v-on:click="onSubmit">Convert</b-button>

            <b-form-group id="input-group-1"
                          :label=label2
                          label-for="input-1">
                <b-form-textarea id="textarea-no-auto-shrink"
                                 :placeholder=plcholder2
                                 rows="3"
                                 v-model:value="message2"
                                 max-rows="8"
                                 no-auto-shrink></b-form-textarea>
            </b-form-group>

            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>

    var alphabet_morse = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        "/": " ",
        "-·-·--": "!",
        "·-·-·-": ".",
        "--··--": ","
    };

    function morseToText(morse_text) {
        var messageConverted = [];

        morse_text.split("/").map(function (word) {
            word.split(" ").map(function (letter) {
                messageConverted.push(alphabet_morse[letter]);
            });
            messageConverted.push(" ");
        });

        return messageConverted.join("");
    }

    export default {
        name: 'text2morse',
        props: {
            title: String,
            label1: String,
            label2: String,
            message1: '',
            message2: ''
        },
        methods: {
            onSubmit() {
                var temp = morseToText(this.message1);
                this.message2 = temp;
            },
            onReset(evt) {
                this.message1 = ''
                this.message2 = ''
            }
        }
    };
</script>

<style scoped>
</style>