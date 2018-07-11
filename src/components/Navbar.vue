<template>
  <b-navbar class="nav" toggleable="md">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">
        <font-awesome-icon icon="code"></font-awesome-icon><strong> JT</strong>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav pills>
          <b-nav-item id="item" :class="{ 'active': $route.path == '/' }" href="/">Home</b-nav-item>
          <b-nav-item id="item" :class="{ 'active': $route.path == '/about' }" href="/about">About</b-nav-item>
          <b-nav-item id="item" :class="{ 'active': $route.path == '/blog' }" href="/blog">Blog</b-nav-item>
          <b-nav-item id="item" :class="{ 'active': $route.path == '/projects' }" href="/projects">Projects</b-nav-item>
          <b-nav-item id="item" :class="{ 'active': $route.path == '/contact' }" href="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
module.exports = {
  name: 'navbar',
  methods: {
    activate () {
      this.active = !this.active
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>
