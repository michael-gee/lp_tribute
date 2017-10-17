<template lang="html">
  <div id="song-container">
    <div id="song-intro">
      <h2 class="song-heading">{{ song.title }}</h2>
      <h4 class="song-heading">{{ song.albumName }}</h4>
    </div>

    <div id="song-content">

      <iframe id="song-iframe" :src="song.src" frameborder="0" allowfullscreen></iframe>

    </div>

    <div id="song-btns">
      <v-btn @click="$router.push('/')" large light>Return To Homepage</v-btn>
      <v-btn @click="$router.push('/albums')" large light>Return To Albums Page</v-btn>
      <v-btn @click="$router.push(`/album/${song.albumRoute}`)" large light>Return To Album</v-btn>
      <v-btn @click="randomSong" large light>Next Random Song &#10140;</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        song: {}
      }
    },
    beforeRouteEnter(to, from, next) {
      let currentSong = to.params.song;
      next(vm => {
        vm.$http.get(`songs/${currentSong}.json`)
          .then(response => {
            return response.json();
          }).then(data => {
            vm.song = data;
          });
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.$http.get(`songs/${this.song}.json`)
        .then(response => {
          return response.json();
        }).then(data => {
          this.song = data;
        });
        next();
    },
    methods: {
      randomSong() {
        let randomSong = Math.ceil(Math.random() * 36);
        this.$http.get(`random/${randomSong}.json`)
          .then(response => {
            return response.json();
          }).then(data => {
            this.song = data;
            this.$router.push(`/song/${data}`);
          });
      }
    }
  }
</script>

<style scoped>
  #song-container {
    display: flex;
    flex-direction: column;
  }
  #song-intro {
    padding: 15px;
    text-align: center;
  }
  #song-content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #song-iframe {
    width: 1000px;
    height: 600px;
    margin: 0 auto;
  }
  #song-btns {
    margin: 50px 0;
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    #song-iframe {
      width: 100%;
      height: 450px;
    }
  }
  @media screen and (max-width: 768px) {
    #song-btns {
      display: flex;
      flex-direction: column
    }
  }

  @media screen and (max-width: 600px) {
    #song-intro {
      padding: 10px;
    }
    .song-heading {
      margin: 0;
    }
    #song-iframe {
      width: 100%;
      height: 250px;
    }
    #song-btns {
      margin: 20px;
    }
  }
</style>
