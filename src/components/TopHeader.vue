<template>
  <header>
    <div class="container">
      <p class="welcome">Oh, hi. <strong>Choose a podcast</strong>.</p>
      <!-- <player></player> -->
    </div>
  </header>
</template>

<script type="text/javascript">
  import Player from './player/Player'

  export default {
    name: 'top-header',
    components: {
      Player
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/bootstrap";

  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: $header-height;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    padding: $header-padding;
    z-index: 2;

    .welcome {
      font-size: 1.1em;
    }
  }
</style>
