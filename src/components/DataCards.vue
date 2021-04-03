<template>
  <div class="containerCard">
    <drink-card
      v-for="drink of drinkList"
      :key="drink.idDrink"
      :id="parseInt(drink.idDrink)"
      :description="drink.strDrink"
      :imgsrc="drink.strDrinkThumb"
    />
  </div>
</template>

<script>
import DrinkCard from "./Card";
export default {
  name: "DrinkList",
  components: { DrinkCard },

  props: ["drinkList"],
};
</script>

<style>
.containerCard {
  justify-content: center;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
