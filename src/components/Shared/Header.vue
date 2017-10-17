<template lang="html">
  <header>

    <v-navigation-drawer v-if="!isDesktop" v-model="drawerOpened" enable-resize-watcher temporary dark right>
      <v-list>
        <router-link tag="v-list-tile" v-for="item in menuItems" :key="item.route" :to="{ name:item.route}">
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar dark>
      <router-link tag="div" id="main-title" :to="{ name: 'homepage' }">
        <v-toolbar-title id="toolbar-title">Linkin Park Tribute</v-toolbar-title>
        <img id="lp-logo" src="../../assets/logos/lp-logo-sm.png" alt="Linkin Park Logo">
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="isDesktop">
        <v-btn @click="$router.push('/albums')" dark flat>Albums</v-btn>
        <v-btn @click="$router.push('/tribute')" dark flat>Tribute</v-btn>
        <v-btn @click="$router.push('/other')" dark flat>More LP</v-btn>
      </v-toolbar-items>

      <v-btn v-if="!isDesktop" @click.stop="drawerOpened = !drawerOpened" icon>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: {
      isDesktop: Boolean
    },
    data() {
      return {
        drawerOpened: false,
        menuItems: [
          {icon: 'home', title: 'Home', route: 'homepage'},
          {icon: 'album', title: 'Albums', route: 'albums'},
          {icon: 'star', title: 'Tribute', route: 'tribute'},
          {icon: 'add', title: 'More LP', route: 'other'}
        ]
      }
    }
  }
</script>

<style lang="css">
  #main-title {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
    #lp-logo {
      width: 30px;
      margin-left: 5px;
    }
    @media screen and (max-width: 736px) {
      #main-title {
        margin: 0;
      }
    }
</style>
