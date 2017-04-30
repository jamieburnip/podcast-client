<template>
  <div id="app">
    <top-header>

    </top-header>

    <div class="container">
      <home></home>
    </div>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    TopHeader,
    Home
  }
}
</script>

<style lang="scss">
  @import "~@/assets/sass/bootstrap";

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #edeff0;
    color: #2c3e50;
    margin-top: calc(#{$header-height} + (#{$header-padding}*2))
  }

  p {
    line-height: 1.5;
  }

  a {
    color: rgba($colorOne, .9);
    transition: color 100ms ease-in;

    &:hover {
      color: $colorOne;
    }
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    flex: 1;
  }
</style>
