<template>
  <header>
    <nav>
      <div class="logoMain">
        <h1><span>Medi</span>Drinks</h1>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Brasília+-+DF"
        >
          <img src="../assets/geo-alt.svg" />
          Brasília, DF
        </a>
      </div>

      <button
        class="logGithub"
        target="_blank"
        href="https://github.com/Ryandls"
      >
        <img src="../assets/github.svg" />
        @ryandls
      </button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
}
img {
  margin-right: 5px;
}
h1 {
  font-size: 24px;
}
span {
  color: rgb(0, 162, 255);
}
.logGithub {
  display: flex;
  width: 168px;
  height: 41px;
  padding: 20px;
  margin-top: 15px;
  margin-right: 3rem;
  justify-content: space-evenly;
  align-items: center;

  background-color: #fcfcfc00;
  border: 1px solid rgba(197, 194, 194, 0.796);
  border-radius: 6px;
  cursor: pointer;
}

.logGithub:hover {
  background: #e1e3e4;
}

.logoMain {
  margin: 1.5rem 0 0 3rem;
}
</style>
