<template>
  <div>
    <Header />
    <Body/>
  </div>
</template>
<script>
import Header from "../components/FilterHeader.vue";
import Body from "../components/FilterBody.vue"

export default {
  name: "FilterDrink",
  components: {
    Header,
    Body
  },
};
</script>
<style></style>
