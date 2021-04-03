<template>
  <body>
    <div class="divMain">
      <div class="divImg">
        <img
          src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vuquyv1468876052.jpg"
          alt="Afterglow"
        />
      </div>
      <div class="propsDrink">
        <h1>Afterglow</h1>
        <h2><span>#12560</span></h2>

        <div class="divise">
          <div class="Category">
            <p>Categoria: Cocktail</p>
            <p>Alcoólico: Não-alcoólico</p>
            <p>Copo de servir: Highball Glass</p>
          </div>

          <ul class="tab">
            <lu>XS</lu>
            <lu>S</lu>
            <lu>M</lu>
            <lu>L</lu>
          </ul>
          <router-link :to="{ name: 'Home' }">
            <button class="btn btn-lg btn-primary">
              Voltar para tela inicial
            </button>
          </router-link>
          <div class="Ingredient">
            <ul>
              <p>Ingredientes</p>
              <li>Grenadine</li>
              <li>Orange Juice</li>
              <li>Pineapple Juice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100wv;
}
img {
  width: 500px;
  height: 550px;
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
.tab lu {
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 2rem;
  width: 4rem;
  margin-bottom: 2rem;
}
lu {
  width: 200px;
}
lu:hover {
  background-color: #d3d3d3;
  cursor: pointer;
}

li {
  list-style-image: url("../assets/arrow-right.svg");
}
.divise {
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
span{
   color:grey;
}
</style>
