<template>
  <div id="app">
    <MainHeader />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import MainFooter from "./components/MainFooter.vue"

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">
@import './assets/scss/mixins.scss';
@import './assets/scss/variables.scss';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Greta Sans Condensed Bold","Greta Sans Bold",Arial,sans-serif; 
}

ol, ul{
  list-style: none;
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

.d-none{
  display: none;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: $blue;
}

</style>
