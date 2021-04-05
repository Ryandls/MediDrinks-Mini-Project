<template>
<!-- Na linha 28 é declarado a const id e atribuido a ela o id passado pelo método get da API
 da página Home, usando o $route.params e concatenando o id com o novo método get da linha 32 para que
 venha os dados do id certo.-->
  <div>
    <FilterHeader :propsDrink="propsDrink" />
    <MenuFilter :propsDrink="propsDrink"  />
    <FilterData :propsDrink="propsDrink" />
  </div>
</template>
<script>
import FilterHeader from "../components/FilterHeader.vue";
import FilterData from "../components/FilterData.vue";
import MenuFilter from "../components/MenuFilter";
import axios from "axios";

export default {
  name: "FilterDrink",
  components: {
    FilterHeader,
    FilterData,
    MenuFilter,
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

<style>
</style>
