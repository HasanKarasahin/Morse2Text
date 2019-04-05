<template>
    <com_form title="Text To Morse" label1="Text" label2="Morse" :message1=message1 :message2=message2 @onSubmit="onSubmit"></com_form>
</template>

<script>

    var alphabet_latin = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        " ": "/",
        "!": "-·-·--",
        ".": "·-·-·-",
        ",": "--··--"
    };

    export default {
        name: 'text2morse',
        data() {
            return {
                message1:'',
                message2: ''
            }
        },
       
        methods: {
            textToMorse(latin_text) {
                console.log();
                var messageConverted = [];
                latin_text = latin_text.split(" ");
                var sayac = 0;
                latin_text.map(function (word) {
                    sayac++;
                    var i;
                    for (i = 0; i < word.length; i++) {
                        messageConverted.push(alphabet_latin[word[i]]);
                    }

                    if (sayac < latin_text.length)
                        messageConverted.push("/");
                });

                return messageConverted.join(" ");
            },
            onSubmit(msj1) {
                this.message1 = msj1;
                var temp = msj1;
                temp = this.textToMorse(temp.toLowerCase());
                this.message2 = temp;
            }
        }
    }
</script>

<style scoped>
</style>