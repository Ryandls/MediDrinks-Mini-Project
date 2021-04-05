<template>
  <div>
    <!-- Toggle para alternar as formas de visualização da página utilizando a função menuActive criada na linha 21-->
    <div class="btn-group btn-group-toggle selectorView" @click="menuActive">
      <!-- Usando o state como Boolean para mudar o css e alternar de acordo com as imagens bloc para bloco e list para lista.-->

      <div :class="['btn', 'btn-light', 'toggleView', { active: state }]">
        <img src="../assets/bloc.svg" />
      </div>

      <div :class="['btn', 'btn-light', 'toggleView', { active: !state }]">
        <img src="../assets/listView.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewStyle",
  props: {
    state: Boolean,
  },
  methods: {
    menuActive() {
      this.$emit("viewSelection");
    },
  },
  emits: ["viewSelection"],
};
</script>
<style>
.selectorView {
  float: right;
  margin-top: 35px;
  margin-right: 5rem;
}
.toggleView {
  background-color: white;
  cursor: pointer;
}

img {
  width: 20px;
  height: 20px;
}
checkbox {
  display: none;
}
</style>
