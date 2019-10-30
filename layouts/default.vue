<template>
  <div>
    <app-header/>
    <nuxt/>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader';
  import AppFooter from '~/components/AppFooter';

  export default {
    components: { AppHeader, AppFooter }
  }
</script>

<style>

  body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    text-transform: uppercase;
  }


  #__layout>div>div {
    max-width: 80%;
    margin: 32px auto;
    padding: 0 24px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 1120px) {
    #__layout>div>div {
      padding: 0 10px;
      max-width: 100%;
    }
  }
</style>
