<template>
  <div>
    <!-- v-for utilizado na segunda página para pegar os dados da API e passar pro componente filho poder dinamicamente modificar os textos e imgs de acordo com ID-->
    <FilterBody
      v-for="drink of propsDrink"
      :key="drink.idDrink"
      :id="parseInt(drink.idDrink)"
      :drink="drink"
    />
  </div>
</template>

<script>
import FilterBody from "./FilterBody";
export default {
  name: "FilterData",
  components: { FilterBody },

  props: ["propsDrink"],
};
</script>

<style></style>
