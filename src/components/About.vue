<template>
  <section class="paraAbout2">
    <div class="container">
      <div class="jumbotron">
        <h1>ABOUT</h1>
        <b-img rounded="circle"
               src="https://firebasestorage.googleapis.com/v0/b/jamestaber-b329d.appspot.com/o/JamesTaber.jpg?alt=media&token=f49e68c4-745f-454f-8128-cd9d874c3b7f"
               fluid alt="jamesTaber" class="m-1"></b-img>
        <p>Hello! My name is James Taber.</p>
        <a class="resume" href="https://firebasestorage.googleapis.com/v0/b/jamestaber-b329d.appspot.com/o/resume.pdf?alt=media&token=45637800-f5fc-4bad-a98b-35bd6842d0de" target="_blank">
          <p class="resume">Download Resume</p></a>
        <p class="description">I am a 34 year old father and husband and I currently have a Bachelor of
        Science of Web Design and Development from Full Sail University. I enjoy to spend time with my family, play video
        games, take road trips, and I also broadcast to Twith.tv when I am able to (<a href="https://twitch.tv/xalbia">Twitch.tv/xalbia</a>).
          I excel with Node projects, especially with the MEVN stack, but I am knowledgeable in the LAMP, MERN, and MEAN stacks.
          My degree consisted of C# for the first half of my degree, then it went on to include HTML, CSS, ES5 and ES6 JavaScript, SCSS, Bootstrap,
          PHP, Codeigniter, Symfony, NODEjs, Express.js, React.js, Vue.js, MongoDB, MySql, Cypher, Discord.js, Docker, CircleCi, and Stripe.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'James Taber',
    titleTemplate: '%s - About',
    meta: [
      {name: 'keywords', content: 'James Taber, Vuejs, Web Design and Development, Web Dev on Twitch, Fort Smith, Arkansas, Arkansas'},
      {name: 'description', content: 'James Taber is a Full Stack Web Designer and Developer who excels with the MEAN, MERN, and MEVN stacks and has a B.S. of Web Design and Development.'},
      {property: 'og:title', content: 'James Taber - About'},
      {property: 'og:site_name', content: 'James Taber Portfolio'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'http://www.jamestaber.info'},
      {property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/jamestaber-b329d.appspot.com/o/JamesTaber.jpg?alt=media&token=f49e68c4-745f-454f-8128-cd9d874c3b7f'},
      {property: 'og:description', content: 'James Taber is a Full Stack Web Designer and Developer who excels with the MEAN, MERN, and MEVN stacks and has a B.S. of Web Design and Development.'}
    ],
    link: [
      {rel: 'canonical', href: 'http://www.jamestaber.info'}
    ]
  }
}
</script>
