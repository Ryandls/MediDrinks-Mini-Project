<template>
  <div>
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
  </div>
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
  flex-direction: left;
  list-style: none;
}
ul li {
  margin-left: 10px;
}
.divLink {
  margin-left: 28%;
  padding-bottom: 5px;
}
</style>
