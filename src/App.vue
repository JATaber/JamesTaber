<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './assets/scss/app.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $silver;
  margin: 0;
}
</style>
