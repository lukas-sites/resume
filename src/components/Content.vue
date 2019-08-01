<template>
  <section class="container">
    <section>
      <div style="padding: 0 20px;">
        <h1>Education</h1>
        <div>
          <template-education
            v-for="(education, idx) in resume.education"
            :key="idx"
            v-bind="education"
          ></template-education>
        </div>

        <h1>Work Experience</h1>
        <div>
          <template-work-experience
            v-for="(experience, idx) in resume.workExperience"
            :key="idx"
            v-bind="experience"
          ></template-work-experience>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { TemplateEducation, TemplateWorkExperience } from "./templates";

export default {
  components: {
    TemplateEducation,
    TemplateWorkExperience
  },
  props: {
    resume: Object
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
