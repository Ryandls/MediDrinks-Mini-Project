<template>
  <div class="card">
    <img :src="imgsrc" :alt="description" />
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
  padding-left: 2rem;
  background-color: rgba(240, 240, 240, 0.152);
  border: solid 1px grey;
}
.card__description p {
  margin: 0.25rem;
}
span {
  font-size: large;
  font-weight: bold;
}
</style>
