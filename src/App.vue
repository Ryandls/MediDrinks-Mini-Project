<template>
  <div id="">
 <Header/>
 <mainBody/>
  </div>

</template>

<script>

import Header from './components/header';
import mainBody from './components/mainBody';

export default {
  name: 'App',
  components: {
    Header,
    mainBody
  }
}
</script>

<style>

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    display:flex;
    align-items: center;
    justify-content: center;
  }
</style>
