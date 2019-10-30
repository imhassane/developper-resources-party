<template>
  <header>
    <h3><nuxt-link :to="{ name: 'index', query: { type: ['VIDEO', 'ARTICLE'] } }">Ressource party</nuxt-link></h3>
    <nav v-bind:class="[ navOpen ? 'nav-open' : '' ]">
      <ul>
        <li><nuxt-link :to="{ name: 'index', query: { type: ['VIDEO'] } }">Videos</nuxt-link></li>
        <li><nuxt-link :to="{ name: 'index', query: { type: ['ARTICLE'] } }">Articles</nuxt-link></li>
        <li><nuxt-link :to="{ path: '/ressource/add' }">Add a ressource</nuxt-link></li>
        <li><a href="http://github.com/imhassane" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </nav>
    <div class="nav-switcher">
      <img @click="toggleSwitcher" :src="img" alt="burger" />
    </div>
  </header>
</template>

<script>

  import burger from "~/static/nav-burger.png";
  import close from "~/static/close.png";

  export default {
    name: 'app-header',
    components: {  },
    data: function() { return { img: burger, navOpen: false } },
    methods: {
      toggleSwitcher() {
        this.img = this.img === burger ? close : burger;
        this.navOpen = !this.navOpen;
      }
    },
    mounted: function() {
      let links = document.querySelectorAll('header nav ul li a');
      links.forEach(l => {
        l.addEventListener('click', () => {
          this.toggleSwitcher();
        })
      })
    }
  }
</script>

<style scoped>
  .nav-switcher { display: none; }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 20px;

    font-weight: bold;
    border-bottom: 1px solid black;
  }

  header nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  header nav ul li {
    padding: 1px 5px;
  }

  header nav ul li a:hover {
    border-bottom: 3px solid black;
  }

  @media (min-width: 591px) and (max-width: 800px) {
    header {
      flex-direction: column;
      margin-top: 15px;
    }

    header h3 {
      margin: 0 auto;
    }

    header nav {
      margin: 0 auto;
    }
  }

  @media (max-width: 590px) {
    .nav-switcher {
      display: block;
      width: 30px;
      z-index: 30;
    }

    .nav-switcher img {
      width: 100%;
    }

    header {
      padding: 2px 5px;
    }
    header nav {
      display: none;
    }

    .nav-open {
      display: block;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, .9);
      position: absolute;
      top: 0;
      left: 0;
    }

    .nav-open ul {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 10%;
    }

    .nav-open ul li {
      margin: 10px;
      border-bottom: 1px dotted white;
      width: 80%;
    }

    .nav-open ul li a {
      color: white;
    }
  }

</style>