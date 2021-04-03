<template>
  <header>
    <div class="logoDrink">
      <h1><span>Medi</span>Drinks</h1>
    </div>
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
        <li>
          Afterglow
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  font-size: 24px;
}
span {
  color: grey;
}
h1 span {
  color: rgb(0, 162, 255);
}

ul {
  display: flex;
  flex-direction: left;
  list-style: none;
}
ul li {
  margin-left: 10px;
}
.logoDrink {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.divLink { 
  margin-left: 22%;
  padding-bottom: 5px;
}
</style>
