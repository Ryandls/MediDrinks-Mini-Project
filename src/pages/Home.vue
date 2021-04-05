<template>
  <div>
    <Header />
    <div class="divise">
      <ViewStyle
        :state="viewStyle === 'grid'"
        @viewSelection="viewStyle = viewStyle === 'grid' ? 'list' : 'grid'"
      />
    </div>

    <MainBody :found="drinkList.length" />
    <!-- listStyle é passado como props para o componente data Cards, dizendo que viewStyle tem que ser diferente de 'grid'-->
    <DataCards :drinkList="drinkList" :listStyle="viewStyle !== 'grid'" />
  </div>
</template>

<script>
import Header from "../components/Header";
import ViewStyle from "../components/ViewStyle";
import MainBody from "../components/MainBody";
import DataCards from "../components/DataCards";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    ViewStyle,
    MainBody,
    DataCards,
  },
  data() {
    return {
      drinkList: [],
      viewStyle: "grid",
    };
  },

  mounted() {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      )
      .then((res) => (this.drinkList = res.data.drinks))
      .catch((error) => console.log(error));
  },
};
</script>
<style>
.divise {
  border-top: 1px solid rgb(173, 173, 173);
  margin-top: 1rem;
}
.containerCard {
  justify-content: center;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.viewWrap {
  display: grid;
  justify-content: center;
}
</style>
