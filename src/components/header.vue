<template>
  <header>
    <nav>
      <div class="logo">
        <h1><span>Medi</span>Drinks</h1>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Brasília+-+DF"
        >
          <img
            src="https://i1.wp.com/abcdados.com.br/wp-content/uploads/2019/04/icone-local.png?fit=225%2C225"
          />
          Brasília, DF
        </a>
      </div>

      <div class="github">
        <a 
          target="_blank"
          href="https://github.com/Ryandls"
        >
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
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
  width: 100vw;
  height: 6vh;
  display: inline-block;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1.5px solid grey;
}

a {
color:black;
  text-decoration: none;
}
a:visited {
  color: black;
}
img {
  width: 15px;
  height: 15px;
  margin-right: 8px;
}
h1 {
  font-size: 18px;
}
span {
  color: rgb(0, 162, 255);
}
.logo {
  margin-left: 1rem;
  font-size: 14px;
}

.github{
  width: 110px;
  height: 27px;
  margin: 0.3rem 1rem 0 0;
  border:1px solid grey;
  border-radius: 5px;
}
</style>
