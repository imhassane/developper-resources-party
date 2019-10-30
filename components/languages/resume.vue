<template>
    <nuxt-link :to="detail">#{{ name }}</nuxt-link>
</template>

<script>
export default {
    name: 'language-resume',
    props: ['id', 'name'],
    computed: {
        detail() {
            return "/languages/" + this.id;
        }
    }
}
</script>

<style scoped>
    a {
        background-color: black;
        color: white;
        padding: 3px 5px;
        font-weight: bold;
    }
</style>