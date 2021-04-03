<template>
  <header>
    <div class="logoDrink">
      <h1><span>Medi</span>Drinks</h1>
    </div>
  </header>
</template>
<script>
export default {
  name: "FilterHeader",
};
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
.logoDrink {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
