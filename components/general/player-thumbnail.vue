<template>
    <nuxt-link :to="detail">
        <img :src="thumbnail" :alt="title" />
    </nuxt-link>
</template>

<script>
export default {
    name: 'player-thumbnail',
    props: ['id', 'url', 'title', 'type'],
    data: function() {
        return {
            API_FLASH_KEY: process.env.API_FLASH_KEY || '',
        };
    },
    computed: {
        thumbnail: function() {
            let url = this.type === "VIDEO" ? 
                                    `http://img.youtube.com/vi/${this.url}/0.jpg`
                                    : `https://api.apiflash.com/v1/urltoimage?access_key=${this.API_FLASH_KEY}&url=${this.url}&format=png`;
            return url;
        },
        detail: function() {
            return "/ressource/" + this.id;
        }
    }
}
</script>
<style scoped>
    a {
        margin: 0; padding: 0;
    }

    img {
        width: 100%;
    }
</style>