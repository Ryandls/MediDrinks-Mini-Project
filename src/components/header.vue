<template>
  <header>
    <nav>
      <div class="logo">
        <h1>MediDrinks</h1>
        <span>Brasília, DF</span>
      </div>

      <button>
        <img
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          class="imgGit"
        />@ryandls
      </button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100vw;
  height: 8vh;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid grey;
}

.logo {
  margin-left: 1rem;
  font-size: 10px;
}
button {
  width: 20vh;
  background: white;

  border: 1px solid;
  border-radius: 10px;
  border-color: rgba(163, 163, 163, 0.897);

  margin-right: 1rem;
}
.imgGit {
  width: 15px;
  height: 15px;
}
</style>
