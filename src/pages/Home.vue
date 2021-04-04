<template>
  <div>
    <Header />
    <div class="divise">
      <MainBody :found="drinkList.length" :dataView="dataView" />
    </div>
    <DataCards :drinkList="drinkList" :classDataView="classDataView" />
  </div>
</template>

<script>
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import DataCards from "../components/DataCards";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    MainBody,
    DataCards,
  },
  data() {
    return {
      drinkList: [],
      classDataView: "containerCard",
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
  methods: {
    dataView(value) {
      this.classDataView = value;
    },
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
</style>
