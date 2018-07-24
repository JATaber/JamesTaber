<template>
  <div>
    <section class="paraProjects2">
      <div class="container">
        <div class="jumbotron">
          <b-card-group columns>
            <b-card  title="This website!" class="ml-auto" tag="article">
              <p class="card-text">
                The site you are currently visiting! Nothing better to add than the site you are currently viewing!
              </p>
              <b-button href="https://github.com/JATaber/JamesTaber" target="_blank">Github Repo</b-button>
            </b-card>
            <b-card  title="Node Form Builder" class="ml-auto" tag="article">
              <p class="card-text">
                A Node plugin that will dynamically create a form.
              </p>
              <b-button href="https://github.com/JATaber/formBuilder" target="_blank">Github Repo</b-button>
            </b-card>
            <b-card  title="Vuejs for Streamer" class="ml-auto" tag="article">
              <youtube videoId="pEfrQZ2G5ZU" class="video"></youtube>
              <p class="card-text">
                A simple Vuejs project that was made for a Twitch Streamer.
              </p>
              <b-button href="https://github.com/JATaber/WAI" target="_blank">Github Repo</b-button>
            </b-card>
            <b-card title="Shopping Cart" class="ml-auto" tag="article">
              <youtube videoId="fkp4_dgH1vk" class="video"></youtube>
              <p class="card-text">
                An eCommerce shopping cart that was made in the MEAN stack and uses Stripes API to capture payment.
              </p>
              <b-button href="https://github.com/JATaber/WD6-ProjectPortfolio/tree/Production" target="_blank">Github Repo</b-button>
            </b-card>
            <b-card title="CRUD NODEjs" class="ml-auto" tag="article">
              <youtube videoId="7JHJ_HaQfnc" class="video"></youtube>
              <p class="card-text">
                A CRUD Application using NODEjs, Express.js, and MySql as a database.
              </p>
              <b-button href="https://github.com/JATaber/ASL/tree/node_crud" target="_blank">Github Repo</b-button>
            </b-card>
            <b-card title="Codeigniter API call" class="ml-auto" tag="article">
              <youtube videoId="LAwCtPP5Ut8" class="video"></youtube>
              <p class="card-text">
                Codeigniter application that uses YouTube API.
              </p>
              <b-button href="https://github.com/JATaber/SSL" target="_blank">Github Repo</b-button>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </section>
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'James Taber',
    titleTemplate: '%s - Projects',
    meta: [
      {name: 'keywords', content: 'James Taber, Vuejs, Web Design and Development, Web Dev on Twitch, Fort Smith, Arkansas, Arkansas Full-Stack Developer'},
      {name: 'description', content: 'James Taber is a Full Stack Web Designer and Developer who excels with the MEAN, MERN, and MEVN stacks and has a B.S. of Web Design and Development.'},
      {property: 'og:title', content: 'James Taber - Projects'},
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
