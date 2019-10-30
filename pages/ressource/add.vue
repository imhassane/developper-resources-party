<template>
    <div>
        <h3>You can suggest us content if you think that they are helpful</h3>
        <p class="info">We will add it in our database once we check it</p>

        <form>
            <form-message :success="success" message="We received your suggestion, we will add if it respect our conditions" />
            <form-message :error="error" :message="error" />
            
            <div>
                <label for="email">Enter the ressource's programming language</label>
                <text-box
                    minLength="1"
                    minLengthText="Please enter a valid name"
                    maxLength="30"
                    maxLengthText="The name is too long"
                    helpText="This field helps us categorizing the ressource"
                    v-on:value-change="handleLanguage"
                />
            </div>
            <div>
                <label for="email">Enter the ressource url</label>
                <text-box
                    minLength="5"
                    minLengthText="The ressource url must be at least 5 characters long"
                    maxLength="100"
                    maxLengthText="The url is too long, please consider using an url shortcut. Ex: bit.ly/abc"
                    helpText="Only YouTube is allowed for videos"
                    v-on:value-change="handleUrl"
                />
            </div>
            <div>
                <label for="email">What do you like about this ressource ?</label>
                <text-area
                    minLength="20"
                    minLengthText="The ressource url must be at least 20 characters long"
                    maxLength="100"
                    maxLengthText="The url is too long, please consider using an url shortcut. Ex: bit.ly/abc"
                    helpText="This field is required and will help us displaying the ressource"
                    v-on:value-change="handleArgument"
                />
            </div>
            <input v-if="language && argument && url" type="submit" value="Send" @click="handleSubmit">
        </form>
    </div>
</template>

<script>
import TextBox from '~/components/form/textbox.vue';
import TextArea from '~/components/form/textarea.vue';
import Message from '~/components/form/message.vue';

import { CREATE_SUGGESTION } from "~/apollo/queries/suggestion";
    
export default {
    name: "add",
    components: { TextBox, TextArea, Message },
    data: function() { return { language: null, url: null, argument: null, success: false, error: null } },
    methods: {
        handleLanguage: function(value) { this.language = value; },
        handleUrl: function(value) { this.url = value; },
        handleArgument: function(value) { this.argument = value; },
        handleSubmit: async function(e) {
            try {
                e.preventDefault();

                const variables = {
                    language: this.language,
                    url: this.url,
                    argument: this.argument
                };
                const { data } = await this.$apollo.mutate({
                    mutation: CREATE_SUGGESTION,
                    variables
                });
                if(data) this.success = true;
            } catch({ message }) {
                this.error = message;
            }
        }
    }
}
</script>

<style scoped>
    form {
        padding: 50px 5px;
    }

    form>div {
        margin: 45px 0;
    }

    label {
        font-size: small;
        font-weight: bold;
    }

    input[type=submit] {
        background-color: black;
        color: white;
        padding: 5px 8px;
        float: right;
        border: 1px solid black;
        width: 100px;
    }

    .info {
        font-size: small;
    }
</style>