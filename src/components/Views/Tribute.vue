<template lang="html">
  <div id="tribute-container">
    <h2 id="tribute-title">Tribute</h2>

    <div id="tribute">
      <p class="tribute-text">The first thing that comes to mind when I hear "Linkin Park" is my middle school days (currently 21 years old) when I would play the Meteora and Hybrid Theory albums on repeat. To this day 'Breaking The Habit' on the Meteora album is still one of my favorite songs of all time. Growing up with Linkin Park's music had a profound impact on my childhood, they were one of my favorite bands and their music always helped me get through tough times because you could genuinely relate to the lyrics they would put into their songs.</p>

      <p class="tribute-text">After Chester's death, the explosion of social media really showed that Linkin Park's impact was truly worldwide. It was crazy to see thousands of people from countries I would have never guessed LP to be so relevant in gather together and celebrate Chester's life. It showed that their impact was far beyond what I could have ever imagined and gave me a sense of relief knowing that their music was so influential to so many people as it was to me. Not only from fans, but from hundreds of different musicians from all genres paid tribute to Chester either through social media or even taking time from their own performances to play a LP song in his memory. Both the respect and gratitude given from everybody really proved that they are one of the most influential and greatest rock bands of all time.</p>

      <p class="tribute-text">Chester's death also was a prominent reminder that mental health and depression issues are absolutely real even if it someone who would seem to have everything. It just goes to show that even in a room full of people (or in this case, on stage infront of thousands of people) you can still feel alone. Below I have listed the United State's number for suicide prevention along with a link to a tweet Chester's wife Talinda wrote on World Suicide Prevention Day listing the suicide hotline numbers for a majority of countries around the world.</p>

      <p class="tribute-text">So this is my tribute to Linkin Park, doing it the only way I know how by creating a web application project in their memory. Thank you to anyone who has given their time viewing this tribute and thank you to Linkin Park for having such a major impact on your fan's lives.</p>

      <br>

      <p class="additional-info">United States Suicide Prevention Number: 1-800-784-8433</p>
     <a href="https://twitter.com/TalindaB/status/906907510803636225" target="_blank"><p class="additional-info">-- World Suicide Hotline Numbers --</p></a>

     <br>

     <p class="additional-info">RIP Chester Bennington</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="css">
  #tribute-container {
    padding: 25px 0;
  }
  #tribute-title {
    text-align: center;
    margin: 0;
  }
  #tribute {
    max-width: 1000px;
    padding: 10px;
    border-radius: 5px;
    margin: 0 auto;
    font-size: 1.6em;
  }
  .tribute-text {
    margin: 7px;
    text-indent: 0;
    text-align: center;
  }
  .additional-info {
    text-align: center;
    color: white;
    margin: 5px;
  }
  /* IPAD */
  @media screen and (max-width: 960px) {
    #tribute {
      border: none;
      padding: 10px 0;
    }
  }
</style>
