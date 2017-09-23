<template>
  <v-app dark>
    <app-header></app-header>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  import Header from './components/Shared/Header'

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="css">
</style>
