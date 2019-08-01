<template>
  <section class="container">
    <section v-for="index in 50" :key="index">
      <div style="padding: 0 20px;">
        <h2>Education</h2>
        <template-education
          degree="Bachelor of Science in Computer Science"
          from="Clemson University"
          date="01/2017 - 05/2019"
          gpa="3.96/4.0"
        ></template-education>
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
