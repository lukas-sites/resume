<template>
  <section class="container">
    <section>
      <div style="padding: 0 20px;">
        <h1>Education</h1>
        <div>
          <education
            v-for="(education, idx) in resume.education"
            :key="idx"
            v-bind="education"
          ></education>
        </div>

        <h1>Work Experience</h1>
        <div>
          <work-experience
            v-for="(experience, idx) in resume.workExperience"
            :key="idx"
            v-bind="experience"
          ></work-experience>
        </div>

        <h1>Skills</h1>
        <div>
          <skill
            v-for="(skill, idx) in resume.skills"
            :key="idx"
            v-bind="skill"
          ></skill>
        </div>

        <h1>Languages</h1>
        <div>
          <skill
            v-for="(language, idx) in resume.languages"
            :key="idx"
            v-bind="language"
          ></skill>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { Education, WorkExperience, Skill } from "./templates";

export default {
  components: {
    Education,
    WorkExperience,
    Skill
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
