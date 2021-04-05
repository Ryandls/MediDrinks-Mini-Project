<template>
  <div class="mainBody">
    <div class="divChild">
      <div>
        <h1>
          Os melhores drinks não-alcoólicos do
          <span class="textBlue">Brasil</span>
        </h1>
        <p>{{ found }} resultados encontrados.</p>
      </div>
    </div>

    <div class="btn-group btn-group-toggle menuView" data-toggle="buttons">
      <label
        @click="dataView($event.target.id)"
        id="viewWrap"
        class="btn btn-secondary active"
      >
        <input type="radio" />
        <img src="../assets/block.svg" />
      </label>
      <label
        @click="dataView($event.target.id)"
        id="containerCard"
        class="btn btn-secondary active"
      >
        <input type="radio" />
        <img src="../assets/listView.svg" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
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
.menuView {
  margin: 0rem 3rem 2rem 0rem;
}

h1 {
  font-size: 24px;
}
p {
  color: grey;
}
img {
  width: 20px;
  height: 20px;
}
label {
  background-color: white!important;
  cursor: pointer;
  margin-right: 3px;
}

.textBlue {
  font-size: 24px;
  color: rgb(0, 162, 255);
}
.viewWrap {
  justify-content: center;
  display: grid;
}
</style>
