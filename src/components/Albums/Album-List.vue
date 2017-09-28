<template lang="html">
  <div id="album-list-container">
    <h2 id="album-list-title">Albums</h2>

    <div id="albums">

      <div v-for="album in albums" :key="album.name" class="album">
        <div class="album-img-container">
          <img class="album-img" :src="album.image" :alt="album.imageAlt">
        </div>

        <div class="album-info">
          <p>{{ album.name }}</p>
          <p>{{ album.year }}</p>
          <router-link tag="div" :to="{ name: album.route, params: { album: album.param } }">
            <v-btn class="grey darken-2" large>Go To Album &#10140;</v-btn>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        albums: [
          {
            name: 'One More Light',
            year: 2017,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fone-more-light.jpg?alt=media&token=7f17b3c5-a9ae-477e-98ff-e7ebace10052',
            imageAlt: 'One More Light Album Cover',
            route: 'album',
            param: 'one-more-light'
          },

          {
            name: 'The Hunting Party',
            year: 2014,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fhunting-party.jpg?alt=media&token=c24d99e2-7121-48a1-a7d9-1a1680882a60',
            imageAlt: 'The Hunting Party Album Cover',
            route: 'album',
            param: 'the-hunting-party'
          },

          {
            name: 'Living Things',
            year: 2012,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fliving-things.jpg?alt=media&token=42e8f548-5dd6-4a9f-bb56-44772dc1bbec',
            imageAlt: 'Living Things Album Cover',
            route: 'album',
            param: 'living-things'
          },

          {
            name: 'A Thousand Suns',
            year: 2010,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fthousand-suns.jpg?alt=media&token=ee086174-ee0d-4920-8acc-da866778ed2b',
            imageAlt: 'A Thousand Suns Album Cover',
            route: 'album',
            param: 'a-thousand-suns'
          },

          {
            name: 'Minutes To Midnight',
            year: 2007,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fminutes-to-midnight.jpg?alt=media&token=8a5cf04f-0b4a-4002-9459-e68cecf3726d',
            imageAlt: 'Minutes To Midnight Album Cover',
            route: 'album',
            param: 'minutes-to-midnight'
          },

          {
            name: 'Meteora',
            year: 2003,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fmeteora.jpg?alt=media&token=cebc1895-153c-4346-9daa-b2eff7cd955f',
            imageAlt: 'Meteora Album Cover',
            route: 'album',
            param: 'meteora'
          },

          {
            name: 'Hybrid Theory',
            year: 2000,
            image: 'https://firebasestorage.googleapis.com/v0/b/linkin-park-tribute.appspot.com/o/album-covers%2Fhybrid-theory.jpg?alt=media&token=d1d726b5-83bb-4e32-a3ed-f8be7373f1fd',
            imageAlt: 'Hybrid Theory Album Cover',
            route: 'album',
            param: 'hybrid-theory'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #album-list-title {
    text-align: center;
    padding: 25px;
  }
  #albums {
    max-width: 1000px;
    border-top: 1px solid white;
    border-radius: 5px;
    padding-bottom: 50px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .album {
    width: 100%;
    border: 1px solid white;
    border-top: none;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
    .album-img {
      border-radius: 50%;
      width: 300px;
      max-width: 100%;
      padding: 25px 0;
    }
    .album-info {
      text-align: center;
      font-size: 1.8em;
    }
  @media screen and (max-width: 600px) {
    .album {
      padding: 10px 0;
      border-left: none;
      border-right: none;
    }
  }
</style>
