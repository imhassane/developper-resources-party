<template>
  <div>
    <search-bar v-on:search="onSearch" />
    <type-filter v-on:type-change="onTypeChange" :options="type" />
    <p>
      <button v-if="ressourceCount && ressourceCount > ressources.length" @click="loadMoreRessources">
        {{ loading ? 'loading...' : "Show more" }}
      </button>
    </p>
    <div class="ressource-list">
      <ressource v-for="r in ressources" :key="r.id"
        :id="r.id" :title="r.title" :url="r.url" :type="r.type"
      />
    </div>
    <p>
      <button v-if="ressourceCount && ressourceCount > ressources.length" @click="loadMoreRessources">
        {{ loading ? 'loading...' : "Show more" }}
      </button>
    </p>
  </div>
</template>

<script>
import { RESSOURCES_LIST, RESSOURCES_COUNT } from "~/apollo/queries/post";

import SearchBar from "~/components/SearchBar";
import Ressource from "~/components/ressources/resume";
import TypeFilter from "~/components/filters/ressource_type";

export default {
  name: 'HomePage',
  watchQuery: ["type", "search"],
  components: { SearchBar, Ressource, TypeFilter },
  head: function() {
    return {
      title: "Let's code better",
      meta: [
        { hid: "description", name: "description", content: "A set of ressources to help you to be a better programmer" },
      ],
    }
  },
  data: () => ({
    loading: 0,
    type: ["VIDEO", "ARTICLE"], search: ""
  }),
  apollo: {
    $loadingKey: 'loading',
    ressources: {
      query: RESSOURCES_LIST,
      variables: function() { return { type: this.type, search: this.search, first: 6, skip: 0 } }
    },
    ressourceCount: {
      query: RESSOURCES_COUNT,
      update: function({ ressourcesConnection }) { return ressourcesConnection.aggregate.count },
    }
  },
  methods: {
    onTypeChange: function(value) {
      this.type = value.length === 0 ? ["VIDEO", "ARTICLE"] : [value];
    },
    onSearch: function(value) {
      if(value.length) {
        this.search = value;
      } else {
        this.search = "";
      }
    },
    loadMoreRessources: function() {
      this.$apollo.queries.ressources.fetchMore({
        variables: { skip: this.ressources.length },
        updateQuery: function(prevResults, { fetchMoreResult }) {
          if(!fetchMoreResult)
            return prevResults;
            return Object.assign({}, prevResults, {
              ressources: [ ...fetchMoreResult.ressources ],
            });
        }
      });
    }
  },
  asyncData: function({ query }) {
    if(query.type) {
      let { type } = query;
      if(typeof type === "string") return { type: [type] };
      return { type };
    }
    return {}
  }
}
</script>

<style scoped>
  .ressource-list {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2%;
    height: auto;
  }

  button {
    background: black;
    color: white;
    border: 1px solid black;
    padding: 4px 5px;
    font-weight: bold;
  }

  @media (max-width: 820px) {
    .ressource-list {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20%;
      padding: 0;
    }
  }

  @media (max-width: 450px) {
    .ressource-list {
      grid-template-columns: 1fr;
      margin-bottom: 50%;
    }
  }

</style>
