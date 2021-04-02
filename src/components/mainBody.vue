<template>
  <div class="searcStatus">
    <h1>
      Os melhores drinks não alcoólicos do <span class="textBlue">Brasil</span>
    </h1>
    <p></p>
    <p>Foram encontrados {{ found }} resultados.</p>
  </div>
</template>

<script>

export default {
  name: "DrinkSearchStatus",
  props: ["found"],
};

</script>

<style>

.mainBody {
  width: 100vw;
  justify-content: center;
  padding: 2rem 5rem 5rem 3rem;
}

.textBlue {
  color: blue;
}

</style>
