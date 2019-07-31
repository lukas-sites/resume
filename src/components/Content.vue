<template>
  <section class="container">
    <section v-for="index in 50" :key="index">
      <div style="padding: 0 20px;">
        <h2>Education</h2>
        <template-education></template-education>
      </div>
    </section>
  </section>
</template>

<script>
import { TemplateEducation } from "./templates";

export default {
  components: {
    TemplateEducation
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.container > * {
  width: 50%;
}
</style>
