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

      <div class="logGithub">
        <a target="_blank" href="https://github.com/Ryandls">
          <img src="../assets/github.svg" />
          @ryandls
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {

  padding: 1rem 2rem 0;
}
nav {
  display: flex;
  justify-content: space-between;
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
.logGithub{
  margin: 2rem 0 2rem;
  padding: 1rem 5rem 1rem;
  border:1px solid rgba(167, 162, 162, 0.671);
  border-radius: 6px;
  cursor:pointer;
}

.logGithub:hover{
background: rgba(222, 222, 223, 0.959);
}

</style>
