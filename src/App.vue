<template>
  <div id="app">
    <MainHeader />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
@import './assets/scss/mixins.scss';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Greta Sans Condensed Bold","Greta Sans Bold",Arial,sans-serif;
}

#app{
  padding: 5px;
}

a{
  color: currentColor;
  text-decoration: none;
}

img{
  max-width: 100%
}

.container{
  @include container;
}

</style>
