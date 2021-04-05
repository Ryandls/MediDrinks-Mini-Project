<template>
  <header>
    <div class="divMain">
      <div>
        <!-- Dropdown utilizando bootstrap -->
        <div class="dropdown ">
          <button
            class="btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="../assets/list.svg" alt="Menu-List" />
          </button>
          <!-- Opções do dropdown -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Opção 1</a>
            <a class="dropdown-item" href="#">Opção 2</a>
            <a class="dropdown-item" href="#">Opção 3</a>
            <a class="dropdown-item" href="#">Opção 4</a>
          </div>
        </div>
        <div class="menuDropdown"></div>
      </div>
      <!-- Logo do Projeto, como não tinha imagem, eu fiz com texto -->
      <div class="logoDrink">
        <h1><span>Medi</span>Drinks</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "FilterHeader",
};
</script>

<style scoped>
.divMain {
  display: flex;
  align-items: center;
  padding: 2rem;
}
.logoDrink {
  align-items: center;
  margin-left: 40%;
}
.menuDropdown {
  display: flex;
  width: 50%;
}
h1 {
  font-size: 24px;
}
span {
  color: grey;
}
h1 span {
  color: rgb(0, 162, 255);
}
button {
  background: white;
  display: flex;
}
button img {
  display: flex;
  width: 25px;
  height: 25px;

  background-color: white;
}
</style>
