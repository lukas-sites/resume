<template>
  <div class="paper">
    <my-header></my-header>
    <my-nav></my-nav>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import MyNav from "./Nav.vue";

export default {
  components: {
    MyHeader,
    MyNav
  }
};
</script>

<style scoped>
.paper {
  display: flex;
  flex-direction: column;
  width: 210mm;
  height: 297mm;
  margin: 0 auto;
  background-color: white;
}
</style>
