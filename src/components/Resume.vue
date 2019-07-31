<template>
  <div class="paper">
    <my-header class="no-shrink"></my-header>
    <my-nav class="no-shrink"></my-nav>
    <my-content class="content"></my-content>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import MyNav from "./Nav.vue";
import MyContent from "./Content.vue";

export default {
  components: {
    MyHeader,
    MyNav,
    MyContent
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

.content {
  flex: 1 1 auto;
  overflow: auto;
}

.no-shrink {
  flex: 0 0 auto;
}
</style>
