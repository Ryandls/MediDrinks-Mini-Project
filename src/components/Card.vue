<template>
  <div class="card">
    <router-link :to="{ name: 'FilterDrink', params: {id} }">

    <img :src="imgsrc" :alt="description" />
    <div class="card__description">
      <p>{{ description }}</p>
      <span>#{{ id }}</span>
    </div>

    </router-link>

  </div>
</template>

<script>


export default {
  name: "DrinkCard",
  props: {
    imgsrc: String,
    description: String,
    id: Number,
  },

};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: rgba(240, 240, 240, 0.152);
  overflow: hidden;
  border:1px solid rgba(185, 184, 184, 0.349);
}

.card img {
  width: 320px;
  height: 280px;
}
.card__description {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 5rem;
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
  color:black;
}

</style>
