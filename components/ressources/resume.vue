<template>
    <div class="container">
        <player-thumbnail :id="id" :title="title" :url="url" :type="type" />
        <h3><nuxt-link :to="detail">{{ title }}</nuxt-link></h3>
    </div>
</template>

<script>
import PlayerThumbnail from "../general/player-thumbnail";

export default {
    name: 'ressource',
    props: ['id', 'title', 'url', 'type'],
    components: { PlayerThumbnail },
    computed: {
        detail: function() {
            return "/ressource/" + this.id;
        }
    }
}
</script>

<style scoped>
    h3 {
        margin: 0; padding: 0;
    }
</style>