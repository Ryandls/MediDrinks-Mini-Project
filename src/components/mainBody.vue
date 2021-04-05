<template>
  <div>
    <div class="mainBody">
      <div class="divChild">
        <div>
          <h1>
            Os melhores drinks não-alcoólicos do
            <span class="textBlue">Brasil</span>
          </h1>
          <!-- Mostrando os resultados encontrandos utilizando a prop 'found' passada pelo pai -->
          <p>{{ found }} resultados encontrados.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
  components: {},
  props: ["found"],
};
</script>

<style scoped>
.mainBody {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 2rem 4rem;
}
.divChild {
  display: flex;
}

h1 {
  font-size: 24px;
}
p {
  color: grey;
}

label {
  background-color: white !important;
  cursor: pointer;
  margin-right: 3px;
}

.textBlue {
  font-size: 24px;
  color: rgb(0, 162, 255);
}
</style>
