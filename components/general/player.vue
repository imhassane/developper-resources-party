<template>
    <div>
        <iframe :src="youtube" frameborder="0" allow="encrypted-media"></iframe>
    </div>
</template>

<script>
export default {
    name: 'player',
    props: ['url'],
    computed: {
        youtube: function() {
            return `https://youtube.com/embed/${this.url}`
        }
    }
}
</script>

<style scoped>
    div {
        width: 100%;
    }

    div iframe {
        width: 100%;
        min-height: 80vh;
    }
</style>