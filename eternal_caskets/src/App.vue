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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
