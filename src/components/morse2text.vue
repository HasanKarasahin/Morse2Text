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
</script>

<style scoped>
</style>