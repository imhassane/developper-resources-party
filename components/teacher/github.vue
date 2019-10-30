<template>
    <div class="container">
        <div>
            <img :src="github.avatar_url" :alt="github.name">
        </div>
        <div>
            <h3>{{ github.name }}</h3>

            <p><strong>Bio</strong></p>
            <p>{{ github.bio }}</p>

            <p><strong>website</strong></p>
            <p><a :href="blog" target="_blank" rel="noopener noreferrer">{{ github.blog }}</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'github-profile',
    props: ['teacher'], 
    data: function() { return { github: {} } },
    computed: {
        github_url: function() {
            return `https://api.github.com/users/${this.teacher.githubId}`;
        },
        blog: function() {
            return `https://${this.github.blog}`;
        }
    },
    mounted: function() {
        fetch(this.github_url, { method: 'get' })
            .then(response => response.json())
            .then(data => { this.github = data; })
            .catch(ex => { throw ex; })
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        width: 75%;
        align-items: top;
        justify-content:flex-start;
    }

    .container div {
        margin-right: 30px;
    }

    @media (max-width: 750px) {
        .container {
            flex-direction: column;
        }
    }
</style>