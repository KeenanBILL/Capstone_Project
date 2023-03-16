<template>

  <div id="app">
      
      <LoaderComp v-if="spinner"/>
      

      <div v-else>

        
      </div>
      
      <NavbarComp/>
      <router-view/>
      <FooterComp/>
      
  </div>


</template>

<script>

import NavbarComp from '../src/components/NavbarComp.vue'
import FooterComp from '../src/components/FooterComp.vue';
import LoaderComp from "../src/components/LoaderComp.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {

  components: {
    LoaderComp,
    NavbarComp,
    FooterComp
  },
    setup() {
      const store = useStore();
      store.dispatch("fetchProducts");
      const spinner = computed (()=> store.state.loadSpinner);

      return {
        spinner
      };
    }
};

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
