<template>
  <section>
    <article class="paraAbout">
      <div class="container">
        <div class="jumbotron">
          <h2>About</h2>
          <p>Thanks for stopping by my portfolio. My name is James Taber.
            I am a 34 year old graduate from Full Sail University, a father, and a husband. I completed Full Sails fast paced
            Web Design and Development degree program while having a toddler and working a full time job.
            To hear more about me and see my resume <a href="/about"><strong>click here</strong></a>.
          </p>
        </div>
      </div>
    </article>
    <article class="paraBlog">
      <div class="container">
        <div class="jumbotron">
        <h2>Blog</h2>
          <p>This is where I share my thoughts and knowledge on the Web Design and Development industry.
            To read what I have written <a href="https://jamestaber806635694.wordpress.com" target="_blank"><strong>click here</strong></a> (Note: Link will take you to an external site).
          </p>
        </div>
      </div>
    </article>
    <article class="paraProjects">
      <div class="container">
        <div class="jumbotron">
          <h2>Projects</h2>
          <p>This is where you can go to see the projects that I have worked on in the past and is a great way to see how my coding has evolved over time.
            To take a look at these previous projects that I have worked on <a href="/projects"><strong>click here</strong></a>.
          </p>
        </div>
      </div>
    </article>
    <article class="paraContact">
      <div class="container">
        <div class="jumbotron">
          <h2>Contact</h2>
          <p>This is where all of my social media links are located and a contact form is here if you have any questions or feedback of any kind.
            To get a hold of me for any of the above mentioned <a href="/contact"><strong>click here</strong></a>.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'James Taber',
    titleTemplate: '%s - Welcome!',
    meta: [
      {name: 'keywords', content: 'James Taber, Vuejs, Web Design and Development, Web Dev on Twitch, xalbia developer'},
      {name: 'description', content: 'James Taber is a Full Stack Web Designer and Developer who excels with the MEAN, MERN, and MEVN stacks and has a B.S. of Web Design and Development.'},
      {property: 'og:title', content: 'James Taber - Welcome'},
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
