<template>
  <div class="divLink">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          <span> Home > </span>
        </router-link>
      </li>
      <li>
        <span> Catálogo > </span>
      </li>
      <li v-for="drink of propsDrink" :key="drink.strDrink">
        {{ drink.strDrink }}
      </li>
    </ul>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "MenuFilter",
  props: ["propsDrink"],
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}
ul li {
  margin-left: 10px;
}
.divLink {
  display: grid;
  grid-template-columns: 55% 45%;
  padding-bottom: 15px;
}
@media (max-width: 800px) {
  .divLink {
    display: flex;
    grid-template-columns: 50% 50%;
  }
}
</style>
