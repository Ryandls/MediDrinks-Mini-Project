<template>
  <div>
  <Header/>
  <MainBody :found="drinkList.length" />
  <BodyTable :drinkList="drinkList"/>
  </div>

</template>

<script>

import Header from './components/Header';
import MainBody from './components/MainBody';
import BodyTable from './components/BodyTable';


import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    MainBody,
    BodyTable,
  },
  data() {
    return {
      drinkList: [],
    };
  },
  mounted() {
    axios
      .get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      )
      .then((res) => (this.drinkList = res.data.drinks));
  },
};
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
