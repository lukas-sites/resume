<template>
  <div class="paper">
    <my-header class="no-shrink"></my-header>
    <my-nav v-bind="resume.contact" class="no-shrink"></my-nav>
    <my-content :resume="resume" class="content"></my-content>
  </div>
</template>

<script>
import resume from "../assets/resume.json";
import MyHeader from "./Header.vue";
import MyNav from "./Nav.vue";
import MyContent from "./Content.vue";

export default {
  components: {
    MyHeader,
    MyNav,
    MyContent
  },
  data() {
    return {
      resume
    };
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
