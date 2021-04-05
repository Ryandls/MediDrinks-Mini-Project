<template>
  <div :class="['containerCard', listStyle ? 'flex-col' : 'flex-row']">

  <!-- v-for utilizado na primeira página pra pegar todos os drinks não alcoólicos da API e colocar no template -->

    <drink-card
      v-for="drink of drinkList"
      :key="drink.idDrink"
      :id="parseInt(drink.idDrink)"
      :description="drink.strDrink"
      :imgsrc="drink.strDrinkThumb"
      :listStyle="listStyle"
    />
  </div>
</template>

<script>
import DrinkCard from "./Card";
export default {
  name: "DrinkList",
  components: { DrinkCard },

  props: {
    drinkList: Array,
    listStyle: Boolean,
  },
};
</script>

<style>
.containerCard {
  justify-content: center;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.flex-col {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}
</style>
