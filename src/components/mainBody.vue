<template>
  <div class="mainBody">
    <h1>
      Os melhores drinks não-alcoólicos do <span class="textBlue">Brasil</span>
    </h1>
    <p>{{ found }} resultados encontrados.</p>
  </div>
</template>

<script>

export default {
  name: "DrinkSearchStatus",
  props: ["found"],
};

</script>

<style scoped>

.mainBody {
  width: 100vw;
  padding: 1rem 2rem 2rem 4rem;
  margin-top: 30px;

}

h1 {
    font-size: 24px;
}
p{
    color:grey;
}
.textBlue {
  font-size: 24px;
  color: rgb(0, 162, 255);
}

</style>
