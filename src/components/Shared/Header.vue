<template lang="html">
  <header>

    <v-navigation-drawer v-model="drawerOpened" enable-resize-watcher temporary dark>

      <v-list>
        <router-link tag="v-list-tile" v-for="item in menuItems" :to="{ name:item.route}">
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar dark>
      <router-link tag="div" id="main-title" :to="{ name: 'homepage' }">
        <v-toolbar-title>Linkin Park Tribute</v-toolbar-title>
        <img id="lp-logo" src="../../assets/lp-logo-min.png" alt="Linkin Park Logo">
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="$router.push('/albums')" dark flat class="hidden-xs-only">Albums</v-btn>
        <v-btn @click="$router.push('/tribute')" dark flat class="hidden-xs-only">Tribute</v-btn>
        <v-btn @click="$router.push('/feedback')" dark flat class="hidden-xs-only">Feedback</v-btn>
      </v-toolbar-items>
      <v-btn @click.stop="drawerOpened = !drawerOpened" icon class="hidden-sm-and-up">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        drawerOpened: false,
        menuItems: [
          {icon: 'album', title: 'Albums', route: 'albums'},
          {icon: 'star', title: 'Tribute', route: 'tribute'},
          {icon: 'feedback', title: 'Feedback', route: 'feedback'}
        ]
      }
    }
  }
</script>

<style lang="css">
  #main-title {
    cursor: pointer;
  }
  .toolbar__title, #lp-logo {
    display: inline-block;
    padding-top: 3px;
  }
    #lp-logo {
      width: 30px;
      margin-left: 5px;
    }
</style>
