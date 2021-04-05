<template>
  <div>
    <!-- v-for utilizado na segunda página para pegar os dados da API e passar pro componente filho poder dinamicamente modificar os textos e imgs de acordo com ID-->
    <FilterBody
      v-for="drink of propsDrink"
      :key="drink.idDrink"
      :id="parseInt(drink.idDrink)"
      :description="drink.strDrink"
      :imgsrc="drink.strDrinkThumb"
      :alcoholic="drink.strAlcoholic"
      :glass="drink.strGlass"
      :category="drink.strCategory"
      :ingredient1="drink.strIngredient1"
      :ingredient2="drink.strIngredient2"
      :ingredient3="drink.strIngredient3"
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
