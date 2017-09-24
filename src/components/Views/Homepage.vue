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

      <section id="featured-albums">

      </section>

      <section ref="songs" id="featured-songs">
        <h3 id="songs-title">Featured Songs</h3>
        <iframe id="featured-iframe" src="https://www.youtube.com/embed/Tm8LGxTLtQk" frameborder="0" allowfullscreen></iframe>

        <h4 id="other-features-title">Other Featured Songs...</h4>

        <v-layout id="other-featured-container" row justify-space-around>
          <router-link tag="div" v-for="(song, index) in featuredSongs" to="/albums" class="other-featured-wrapper">
            <img class="featured-song-img" src="../../assets/lp-logo-md.png" :alt="song.name">
            <h6>{{ song.name }}</h6>
            <h6>{{ song.year }}</h6>
          </router-link>
        </v-layout>
      </section>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        featuredSongs: [
          { name: 'In The End', year: 2000 },
          { name: 'Numb', year: 2003 },
          { name: 'Breaking the Habit', year: 2004 },
          { name: 'Leave Out All the Rest', year: 2008 }
        ]
      }
    },
    methods: {
      pageScroll() {
        this.$refs.songs.scrollIntoView({block: "start", behaivor: 'smooth'});
      }
    }
  }
</script>

<style scoped>
  #homepage-container {
    width: 100%;
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
    ), url('../../assets/chester-min.jpg');
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

  /* ALBUMBS SECTION ------- DO THIS SECTION FIRST!!!!!!!!!! */

  /* SONGS SECTION */
  #featured-songs {
    display: flex;
    flex-direction: column;
  }
  #songs-title {
    text-align: center;
    padding-top: 50px;
  }
  #featured-iframe {
    width: 100%;
    height: 600px;
    margin: 25px auto;
  }
  #other-features-title {
    margin-top: 25px;
    text-align: center;
  }
  #other-featured-container {
    width: 1050px;
    margin: 25px auto;
    text-align: center;
  }
  .other-featured-wrapper {
    cursor: pointer;
  }
    .other-featured-wrapper:hover {
      text-decoration: underline;
    }
  .featured-song-img {
    border-radius: 50%;
    width: 175px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1200px) {
    #intro {
      background-position: 75%;
      background-image: linear-gradient(
      rgba(0, 0, 0, .45),
      rgba(0, 0, 0, .45)
      ), url('../../assets/chester-min.jpg');
    }
  }
  /* PHONE */
  @media screen and (max-width: 736px) {
    #intro {
      height: calc(100vh - 56px);
    }
  }
</style>
