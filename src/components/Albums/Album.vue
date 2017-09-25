<template lang="html">
  <div id="album-container">

    <h2 id="album-title">{{ album.name }} - {{ album.year }}</h2>

    <div id="album-content">

      <div id="album-img-container">
        <img id="album-img" :src="album.cover" :alt="album.alt">
      </div>

      <div id="album-songs">
        <div v-for="(song, index) in album.songs" class="album-song">
          <router-link :to="{ name: song.route, params: { song: song.param } }" class="song-link">
            {{ index + 1 }}. {{ song.title }}
          </router-link>
        </div>
      </div>

    </div>

    <div id="album-buttons">
      <v-btn @click="$router.push('/')" light large>Return To Homepage</v-btn>
      <v-btn @click="$router.push('/albums')" light large>Return To Albums</v-btn>
    </div>

  </div>
</template>

<script>
  export default {
    beforeRouteEnter(to, from, next) {
      let currentAlbum = to.params.album;
      next(vm => {
        vm.$http.get(`albums/${currentAlbum}.json`)
          .then(response => {
            return response.json();
          }).then(data => {
            vm.album = data;
            vm.album.songs.splice(0, 1);
          });
      });
    },

    data() {
      return {
        album: {}
      }
    }
  }
</script>

<style scoped>
  #album-title {
    padding: 25px 0;
    text-align: center;
  }
  #album-content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
    #album-img-container {
      width: 50%;
      text-align: center;
    }
    #album-img {
      margin: 0 auto;
      border-radius: 5px;
    }
    #album-songs {
      font-size: 1.3em;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
      .album-song {
        padding: 3px 0;
        text-align: center;
      }
      .album-song:hover {
        border-bottom: 1px solid white;
      }
      .song-link {
        color: white;
        text-decoration: none;
      }
    #album-buttons {
      padding: 50px 0;
      text-align: center;
    }

  /* IPAD */
  @media screen and (max-width: 960px) {
    #album-content {
      flex-direction: column;
      align-items: center;
    }
    #album-img-container {
      width: 90%;
      margin-bottom: 25px;
    }
    #album-songs {
      width: 100%;
    }
  }
</style>
