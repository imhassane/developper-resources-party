<template>
    <div>
        <p v-if="success">{{ message }}</p>
        <p v-if="error">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'form-message',
    props: ['success', 'error', 'message'],
}
</script>

<style scoped>
    div {
        margin: 5px 0;
    }

    p {
        border: 1px solid black;
        font-weight: bold;
        font-size: small;
    }

    .success {
        background-color: black;
        color: white;
    }

    .error {
        border: 1px solid saddlebrown;
    }
</style>