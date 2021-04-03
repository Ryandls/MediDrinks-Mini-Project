<template>
  <header>
    <div class="logoDrink">
      <h1><span>Medi</span>Drinks</h1>
    </div>
    <div>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          Home  >
        </router-link>
      </li>
      <li>
      Catálogo  >
      </li>
      <li>
        Afterglow
      </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
    
};
</script>

<style scoped>
h1 {
  font-size: 24px;
}
span {
  color: rgb(0, 162, 255);
}
.logoDrink {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
ul {
    display:flex;
    flex-direction: left;
    list-style: none;
}
ul li {
    margin-left: 10px;
}
a {
  text-decoration: none;
  color:black;
}

</style>
