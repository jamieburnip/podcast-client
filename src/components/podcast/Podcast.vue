<template>
  <div class="podcast">
    <a href="#" class="podcast__play podcast__play--hidden">
      <img src="../../assets/img/play.svg" alt="Play" class="podcast__play-button">
    </a>
    <div class="podcast__details">
      <div class="podcast__sub">2 days ago</div>
      <h1 class="podcast__header">
        Lorem ipsum dolor sit.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'podcast'
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/bootstrap";

  .podcast {
    background-color: #fff;
    display: flex;
    min-height: 240px;
    border-radius: $global-radius;
    box-shadow: 0 5px 10px rgba(#000, .05);
    margin-bottom: 40px;
    // overflow: hidden;

    &__play {
      width: 15%;
      display: none;
      overflow: hidden;
      background-color: $blue;
      align-items: center;
      justify-content: center;
      border-top-left-radius: $global-radius;
      border-bottom-left-radius: $global-radius;

      &:hover {
        .podcast__play-button {
          opacity: 1;
          transform: scale(3.5) rotate(-10deg);
        }
      }
    }

    &__play-button {
      color: 222;
      opacity: .4;
      width: 60%;
      transition: all 180ms ease-in-out;
    }

    &__details {
      width: 85%;
      padding: 40px;
    }
  }

  @media only screen and (min-width: 768px) {
    .podcast__play {
      display: flex;
    }
  }
</style>
