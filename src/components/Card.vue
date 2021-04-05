<template>
  <!-- Aqui verifica se tem a classe listStyle, se tiver, ela coloca a class list, se não, não faz nada. -->
  <div :class="['card', listStyle ? 'list' : '']">

  <!-- Router-link pra pegar o parametro como id e concatenar com o link da metodo Lookup full cocktail details by id da API-->
    <router-link :to="{ name: 'FilterDrink', params: { id } }">
<!-- Imagem como link pra outra página -->
      <img :src="imgsrc" :alt="description" />
    </router-link>

    <!-- Descrição do Produto -->
    <div class="card__description">
      <p>{{ description }}</p>
      <span>#{{ id }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "DrinkCard",
  props: {
    imgsrc: String,
    description: String,
    id: Number,
    listStyle: Boolean,
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  width: 320px;
  background-color: rgba(240, 240, 240, 0.152);
  overflow: hidden;
}
.card img {
  width: 320px;
  height: 280px;
}
.card.list {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: 4rem;
}
.card.list img {
  width: 150px;
  height: 150px;
  
}
.card__description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 7rem;
  padding-left: 1.5rem;
  background-color: rgba(240, 240, 240, 0.152);
}
.card__description p {
  margin: 0.25rem;
}
span {
  font-size: large;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: black;
}
</style>
