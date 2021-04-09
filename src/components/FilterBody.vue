<template>
  <div>
    <div class="bodyContainer">
      <div class="divMain">
        <div class="divImg">
          <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
        </div>

        <div class="propsDrink">
          <!-- Conteúdo do Metodo details by id da API, associando os valores dinamicamente com as props vindo do componente pai utilizando o v-for-->
          <h1>{{ drink.strDrink }}</h1>
          <h2>
            <span>#{{ id }}</span>
          </h2>

          <div class="div">
            <div class="Category">
              <p>Categoria: {{ drink.strCategory }}</p>
              <p>Alcoólico: {{ drink.strAlcoholic }}</p>
              <p>Copo de servir: {{ drink.strGlass }}</p>
            </div>

            <ul class="tab">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </ul>
            <!-- Router-link utilizado no button para que ao pressionado ele voltara pra tela inicial -->
            <router-link :to="{ name: 'Home' }">
              <button class="button">
                Voltar para tela inicial
              </button>
            </router-link>

            <div class="Ingredient">
              <ul>
                <p>Ingredientes</p>
                <li>{{ drink.strIngredient1 }}</li>
                <li>{{ drink.strIngredient2 }}</li>
                <li>{{ drink.strIngredient3 }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBody",
  props: {
    id: Number,
    drink: String,
  },
};
</script>

<style scoped>
img {
  width: 520px;
  min-width: 450;
  height: 656px;
  min-height: 550;
}
.bodyContainer {
  display: flex;
  justify-content: center;
}
.divMain {
  display: grid;
  grid-template-columns: 50% 50%;
}

.propsDrink {
  width: 400px;
  margin-left: 5rem;
  padding-top: 2rem;
}

.tab {
  display: flex;
}
.tab button {
  width: 3rem;
  margin: 10px 3px 1rem 0;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1.5rem;
  background-color: white;
  color: black;
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
  width: 380px;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #4094f7;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}
.button {
  text-decoration: none;
}
.Ingredient {
  padding-top: 3rem;
}
span {
  color: grey;
}
@media (max-width: 950px) {
  .divMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
