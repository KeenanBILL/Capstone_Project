<template>

<NavbarComp/>
<router-view/>
<FooterComp/>

</template>

<script>

import NavbarComp from '../src/components/NavbarComp.vue'
import FooterComp from '../src/components/FooterComp.vue';

export default {

  components: {

    NavbarComp, 
    FooterComp

  }
}

</script>

<style>

#app {
  font-family: 'Righteous', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003246;
}

</style>
