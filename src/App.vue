<template>
  <div id="">
  <Header/>
  <mainBody/>
  <bodyTable/>
  </div>

</template>

<script>

import Header from './components/header.vue';
import mainBody from './components/mainBody.vue';
import bodyTable from  './components/bodyTable.vue'

export default {
  name: 'App',
  components: {
    Header,
    mainBody,
    bodyTable,
  }
}
</script>

<style>

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
</style>
