<template>
    <div>
        <h2>{{ ressource.title }}</h2>

        <player v-if="ressource.type === 'VIDEO'" :url="ressource.url" />

        <language-resume v-if="ressource.language" :id="ressource.language.id" :name="ressource.language.name" />

        <p>
            <strong>Description</strong>
        </p>

        <p id="description">
            {{ ressource.description }}
        </p>

        <p v-if="ressource.type === 'ARTICLE'">
            This ressource is actually an article, we do not copy article from others.
            We respect their work and encourage everyone to do so. The full article is available
            here: <a :href="ressource.url" class="ressource-url" target="_blank" rel="noopener noreferrer">we wish you a good reading</a>
        </p>

        <p><span id="teacher-title">Teacher</span></p>

        <github-profile v-if="ressource.teacher" :teacher="ressource.teacher" />
    </div>
</template>

<script>
import { RESSOURCE_DETAIL } from "~/apollo/queries/post";
import Player from "~/components/general/player";
import LanguageResume from "~/components/languages/resume";
import GithubProfile from "~/components/teacher/github";

export default {
    components: { Player, LanguageResume, GithubProfile },
    data: function() {
        return { ressource: {}, loading: 0 };
    },
    head: function() {
        return {
            title: `${this.ressource.title} | Ressource party`,
            meta: [
                { hid: "description", name: "description", content: `${this.ressource.description}`}
            ]
        };
    },
    apollo:  {
        $loadingKey: 'loading',
        ressource: {
            query: RESSOURCE_DETAIL,
            variables: function() { return { id: this.$route.params.id } }
        }
    }
}
</script>

<style scoped>
    strong {
        font-weight: 900;
    }
    #description {
        line-height: 40px;
        font-weight: 600;
    }

    #teacher-title {
        font-size: 2em;
        font-weight: bolder;
    }

    .ressource-url {
        border-bottom: 1px solid black;
    }
</style>