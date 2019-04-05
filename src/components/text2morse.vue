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

    function textToMorse(latin_text) {
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
                var temp = this.message1;
                temp = textToMorse(temp.toLowerCase());
                this.message2 = temp;
            },
            onReset(evt) {
                this.message1 = ''
                this.message2 = ''
            }
        }
    }
</script>

<style scoped>
</style>