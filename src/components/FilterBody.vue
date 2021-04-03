<template>
  <body>
    <div class="divMain">
      <div class="divImg">
        <img :src="imgsrc" :alt="description" />
      </div>
      <div class="propsDrink">
        <h1>{{ description }}</h1>
        <h2>
          <span>#{{ id }}</span>
        </h2>

        <div class="div">
          <div class="Category">
            <p>Categoria: {{ category }}</p>
            <p>Alcoólico: {{ alcoholic }}</p>
            <p>Copo de servir: {{ glass }}</p>
          </div>

          <ul class="tab">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </ul>
          <router-link :to="{ name: 'Home' }">
            <button class="btn btn-lg btn-primary">
              Voltar para tela inicial
            </button>
          </router-link>
          <div class="Ingredient">
            <ul>
              <p>Ingredientes</p>
              <li>{{ ingredient1 }}</li>
              <li>{{ ingredient2 }}</li>
              <li>{{ ingredient3 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "FilterBody",
  props: {
    id: Number,
    imgsrc: String,
    description: String,
    alcoholic: String,
    glass: String,
    category: String,
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
  },
};
</script>

<style scoped>

img {
  width: 450px;
  min-width: 450;
  height: 550px;
  min-height: 550;
}
.divMain {
  display: flex;
  justify-content: center;
}

.divImg {
  position: relative;
  float: left;
}
.propsDrink {
  width: 400px;
  margin-left: 5rem;
  padding-top: 2rem;
  float: left;
}

.tab {
  display: flex;
}
.tab button {
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 2rem;
  width: 4rem;
  margin-bottom: 2rem;
  background-color: white;
}

.tab button:hover {
  background-color: #d3d3d3;
  cursor: pointer;
}

li {
  list-style-image: url("../assets/arrow-right.svg");
}
.div {
  padding-top: 6rem;
}
ul li {
  margin-left: 20px;
}
button {
  display: flex;
  background-color: rgb(39, 148, 211);
  justify-content: center;
  width: 100%;
}

.Ingredient {
  padding-top: 3rem;
}
span {
  color: grey;
}
</style>
