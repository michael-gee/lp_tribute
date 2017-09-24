<template>
  <v-app dark>
    <app-header></app-header>

    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
  html {
    scroll-behavior: smooth;
  }

  img {
    max-width: 100%;
  }

  /* ANIMATIONS */
    /* FADE */
  .fade-enter-active {
      animation: fade-in 500ms ease-out forwards;
  }
  .fade-leave-active {
      animation: fade-out 500ms ease-out forwards;
  }
  @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
  }
  @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
  }
</style>
