<template lang="html">
  <div id="view404">
    <h2>Whoops! The route you requested was not found!</h2>
    <v-btn @click="$router.push('/')" large light>Return To Homepage</v-btn>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  #view404 {
    text-align: center;
    padding: 25px 0;
  }
</style>
