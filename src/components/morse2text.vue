<template>
    <com_form title="Morse To Text" label1="Morse" label2="Text" :message2=message2 @onSubmit="onSubmit"></com_form>
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
        name: 'morse2text',
        data() {
            return {
                message1: '',
                message2: ''
            }
        },
        methods: {
            onSubmit(msj1) {
                var temp = morseToText(msj1);
                this.message2 = temp;
            }
        }
    };
</script>

<style scoped>
</style>