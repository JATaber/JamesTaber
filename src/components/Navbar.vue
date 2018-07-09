<template>
  <b-navbar class="nav" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">
      <img class="logo" src="" alt="JT">
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav pills>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/' }" href="/">Home</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/' }" href="/">About</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/' }" href="/">Blog</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/' }" href="/">Projects</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/' }" href="/">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
