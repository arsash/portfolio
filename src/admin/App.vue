<template lang="pug">
  div
    root-header
    nav-bar
    about-block
</template>

<script>
import aboutBlock from './components/about/about'
import rootHeader from './components/header'
import navBar from './components/nav'

export default {
  components: {
    aboutBlock, rootHeader, navBar
  },
}
</script>

<style lang="postcss">
body {
  font-family: sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}
</style>