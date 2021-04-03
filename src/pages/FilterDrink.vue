<template>
  <div>
    <Header />
    <Body />
  </div>
</template>
<script>
import Header from "../components/FilterHeader.vue";
import Body from "../components/FilterBody.vue";
import axios from "axios";

export default {
  name: "FilterDrink",
  components: {
    Header,
    Body,
  },
  data() {
    return {
      propsDrink: [],
    };
  },
  mounted() {

    const id = this.$route.params.id;
    
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((res) => (this.propsDrink = res.data.drinks))
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
