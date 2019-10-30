<template>
    <div>
        <div
            class="input-with-tracker"
            v-bind:class="[
                (messages.minLength || messages.maxLength) !== false  ? 'input-error' : '',
                messages.success === true ? 'input-success' : ''
            ]"
        >
            <textarea
                type="text" v-model="value"
                @change="validateInput"
            ></textarea>
            <span>
                <span class="tracker-wrapper">
                    Min: <span class="tracker">{{ minLength }}</span>
                </span> > {{ value.length }} <
                <span class="tracker-wrapper">
                    Max: <span class="tracker">{{ maxLength }}</span>
                </span>
            </span>
        </div>
        <p class="error" v-if="messages.minLength">{{ messages.minLength }}</p>
        <p class="error" v-if="messages.maxLength">{{ messages.maxLength }}</p>
        <p v-if="helpText" class="help-text">{{ helpText }}</p>
    </div>
</template>

<script>
export default {
    name: 'text-area',
    props: ['minLength', 'maxLength', 'minLengthText', 'maxLengthText', 'helpText' ],
    data: function() { return { value: "", messages: {} } },
    methods: {
        validateInput: function({ target: { value } } ) {
            const { minLength, maxLength, minLengthText, maxLengthText } = this;
            if(value.length < minLength)
                this.messages.minLength = minLengthText;
            else
                this.messages.minLength = null;
            
            if(value.length > maxLength)
                this.messages.maxLength = maxLengthText;
            else
                this.messages.maxLength = null;
        
            if(!this.messages.maxLength && !this.messages.minLength)
                this.messages.success = true;
            else
                this.messages.success = false;

            if(this.messages.success) {
                this.handleBlur()
            }
        },
        handleBlur: function() {
            this.$emit('value-change', this.value);
        }
    }
}
</script>

<style scoped>
    div {
        padding: 5px;
        align-items: baseline;
    }

    div textarea {
        border: none;
        resize: none;
        width: 80%;
        height: 60px;
    }

    div p {
        margin: 3px 0;
        font-size: small;
    }

    .input-error {
        border-bottom: 1px solid red;
    }

    .input-success {
        border-bottom: 1px solid powderblue;
    }

    .help-text {
        color: silver;
    }

    .input-with-tracker {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid silver;
    }

    .input-with-tracker span {
        max-width: 20%;
        text-align: right;
        font-size: x-small;
        color: white;
        padding: 3px;
        background-color: black;
    }

    .error {
        color: red;
        font-size: small;
    }
</style>