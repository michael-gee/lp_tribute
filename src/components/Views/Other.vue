<template lang="html">
  <div id="other-container">
    <h2>More Linkin Park</h2>
    <img id="lp-img" src="../../assets/layout/linkin-park.jpg" alt="Linkin Park Band Image">
    <br>

    <div id="lp-buttons">
      <a href="https://twitter.com/linkinpark" target="_blank">
        <img class="social-icon" src="../../assets/social-media/twitter.png" alt="Twitter Icon">
      </a>
      <a href="https://www.instagram.com/linkinpark/" target="_blank">
        <img class="social-icon" src="../../assets/social-media/instagram.png" alt="Instagram Icon">
      </a>
      <a href="https://www.facebook.com/linkinpark/?fref=ts" target="_blank">
        <img class="social-icon" src="../../assets/social-media/facebook.png" alt="Facebook Icon">
      </a>
      <a href="https://www.youtube.com/user/linkinparktv" target="_blank">
        <img class="social-icon" src="../../assets/social-media/youtube.png" alt="Youtube Icon">
      </a>
      <a href="https://www.reddit.com/r/LinkinPark/" target="_blank">
        <img class="social-icon" src="../../assets/social-media/reddit.png" alt="Reddit Icon">
      </a>
    </div>

    <v-btn href="https://linkinpark.com/" target="_blank" light large>LP Website</v-btn>
    <v-btn href="https://store.linkinpark.com/" target="_blank" light large>LP Store</v-btn>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
  #other-container {
    text-align: center;
    padding: 25px 0;
  }
  #lp-img {
    border-radius: 5px;
  }
  #lp-buttons {
    margin: 25px;
  }
  .social-icon {
    width: 150px;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    .social-icon {
      width: 100px
    }
  }
</style>
