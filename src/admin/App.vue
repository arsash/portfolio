<template lang="pug">
  div
    root-header
    nav-bar
    //- router-view
    //- about-block
    works
</template>

<script>
import aboutBlock from './components/about/about'
import rootHeader from './components/header'
import navBar from './components/nav'
import works from './components/works/works'


export default {
  components: {
    aboutBlock, rootHeader, navBar, works
  }
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