<template>
    <div id="homepage-container">

      <section id="intro">
        <div id="homepage-message">
          <h2>Rip Chester Bennington</h2>
          <h3>1976 - 2017</h3>
        </div>

        <v-layout row justify-center>
          <v-btn @click.native="pageScroll" class="scroll-button" fab large light>
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </v-layout>
      </section>

      <section ref="albums" id="featured-albums">
        <h3 id="albums-title">Featured Albums</h3>
        <div id="albums-wrapper">
          <div v-for="album in featuredAlbums" :key="album.param" class="album-container">
            <router-link :to="{ name: album.location, params: { album: album.param } }">
              <img class="album-img" :src="album.image" :alt="album.alt">
            </router-link>
          </div>
        </div>

        <v-btn @click="$router.push('/albums')" id="albums-btn" large>
          See All Albums &#10140;
        </v-btn>
      </section>

      <section id="featured-songs">
        <h3 id="songs-title">Featured Songs</h3>
        <iframe id="featured-iframe" src="https://www.youtube.com/embed/Tm8LGxTLtQk" frameborder="0" allowfullscreen></iframe>

        <h4 id="other-features-title">Other Featured Songs...</h4>

        <v-layout id="other-featured-container">
          <router-link tag="div" v-for="(song, index) in featuredSongs" :to="{ name: 'song', params: {
            song: song.id
            } }" :key="song.id" class="other-featured-wrapper">
            <img class="featured-song-img" src="../../assets/logos/lp-logo-md.png" :alt="song.name">
            <div class="featured-info">{{ song.name }}</div>
            <div style="margin-bottom: 25px;" class="featured-info">{{ song.year }}</div>
          </router-link>
        </v-layout>
      </section>

      <section id="extra-container">
        <h4>Don't know what song to listen to? Generate A Random Song!</h4>
        <v-btn @click="generateSong" class="random-btn" large>Random Song &#10140;</v-btn>
        <h4>Other Links</h4>
        <v-btn @click="$router.push('/tribute')" class="random-btn" large>Tribute Page</v-btn>
        <v-btn @click="$router.push('/other')" class="random-btn" large>More Linkin Park</v-btn>
        <v-btn href="https://github.com/michaelgee22/lp_tribute" target="_blank" class="random-btn" large>Star On Github</v-btn>
        <v-btn href="https://www.michaelgee.me/contact/" target="_blank" class="random-btn" large>Provide Feedback</v-btn>
        <br>

        <v-btn @click="backToTop" fab dark>
          <v-icon dark>arrow_drop_up</v-icon>
        </v-btn>
      </section>

      <section id="footer">
        <p id="footer-text">Coded By Michael Gee - 2017</p>
      </section>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        featuredSongs: [
          { name: 'Numb', year: 2003, id: 'numb' },
          { name: 'Leave Out All the Rest', year: 2008, id: 'leave-out-all-the-rest' },
          { name: "Until It's Gone", year: 2014, id: 'until-its-gone' },
          { name: 'Breaking the Habit', year: 2004, id: 'breaking-the-habit' }
        ],
        featuredAlbums: [
          {
            alt: 'Meteora Album Cover',
            location: 'album',
            param: 'meteora',
            image: require('../../assets/layout/meteora.jpg')
          },
          {
            alt: 'Hybrid Theory Album Cover',
            location: 'album',
            param: 'hybrid-theory',
            image: require('../../assets/layout/hybrid-theory.jpg')
          },
          {
            alt: 'One More Light Album Cover',
            location: 'album',
            param: 'one-more-light',
            image: require('../../assets/layout/one-more-light.jpg')
          },
          {
            alt: 'Minutes To Midnight Album Cover',
            location: 'album',
            param: 'minutes-to-midnight',
            image: require('../../assets/layout/minutes-to-midnight.jpg')
          }
        ]
      }
    },
    methods: {
      pageScroll() {
        this.$refs.albums.scrollIntoView({block: "start", behaivor: 'smooth'});
      },
      backToTop() {
        window.scrollTo(0, 0);
      },
      generateSong(){
        let randomSong = Math.ceil(Math.random() * 36);
        this.$http.get(`random/${randomSong}.json`)
          .then(response => {
            return response.json();
          }).then(data => {
            this.$router.push(`/song/${data}`);
          });
      }
    }
  }
</script>

<style scoped>
  #homepage-container {
    width: 100%;
  }
  #intro, #featured-albums, #featured-songs {
    font-family: serif;
    font-style: italic;
  }
  /* INTRO SECTION */
  #intro {
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 64px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: linear-gradient(
    rgba(0, 0, 0, .15),
    rgba(0, 0, 0, .15)
    ), url('../../assets/layout/chester.jpg');
  }
    #homepage-message {
      text-align: center;
      margin-top: 50px;
    }
    .scroll-button {
      bottom: 2.5%;
      padding: 20px 0;
      position: absolute;
    }

  /* ALBUMBS SECTION */
  #featured-albums {
    background-color: #eee;
    color: black;
    text-align: center;
    padding: 25px 0;
  }
  #albums-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
    .album-container {
      width: 45%;
      margin: 25px 0;
    }
    .album-img {
      border-radius: 5px;
    }
  #albums-btn {
    font-family: arial;
    font-style: normal;
    font-size: 1.5em;
    margin: 25px 0;
  }

  /* SONGS SECTION */
  #featured-songs {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 50px;
  }
  #featured-iframe {
    width: 1000px;
    height: 600px;
    margin: 25px auto;
  }
  #other-features-title {
    font-size: 2.4em;
    margin-top: 25px;
    text-align: center;
  }
  #other-featured-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 25px auto;
    text-align: center;
  }
  .other-featured-wrapper {
    cursor: pointer;
    margin: 0 25px;
  }
    .other-featured-wrapper:hover {
      text-decoration: underline;
    }
  .featured-song-img {
    border-radius: 50%;
    width: 175px;
    margin-bottom: 10px;
  }
    .featured-info {
      font-size: 1.5em;
    }
  /* EXTRAS SECTION */
  #extra-container {
    padding: 25px 0;
    background-color: white;
    color: black;
    text-align: center;
  }
    .random-btn {
      margin-bottom: 25px;
      font-size: 1.4em;
    }

  #footer-text {
    margin: 0;
    font-size: 1.3em;
    text-align: center;
    padding: 10px 0;
  }

  @media screen and (max-width: 1200px) {
    #intro {
      background-position: 75%;
      background-image: linear-gradient(
      rgba(0, 0, 0, .45),
      rgba(0, 0, 0, .45)
      ), url('../../assets/layout/chester.jpg');
    }
  }
    @media screen and (max-width: 960px) {
      #featured-iframe {
        width: 100%;
        height: 450px;
      }
    }
  /* IPAD */
  @media screen and (max-width: 767px) {
    #intro {
      height: calc(100vh - 56px);
    }
    /* ALBUMS SECTION */
    #featured-albums, #featured-songs {
      padding: 25px 0;
    }
    #albums-wrapper {
      justify-content: space-around;
    }
    .album-container {
      margin: 25px 0;
    }
    /* SONGS SECTION */
    #other-featured-container {
      flex-direction: column;
    }
  }
  /* PHONE */
  @media screen and (max-width: 600px) {
    #featured-songs {
      padding-bottom: 0;
    }
    #other-features-title {
      margin: 5px 0 0 0;
    }
    .featured-song-img {
      width: 100px;
      margin: 0;
    }
    #featured-iframe {
      height: 250px;
    }
  }
</style>
