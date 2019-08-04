<template>
  <section class="container">
    <section>
      <div class="padding">
        <h2>Education</h2>
        <div>
          <education
            v-for="(education, idx) in resume.education"
            :key="idx"
            v-bind="education"
          ></education>
        </div>
      </div>
    </section>

    <section>
      <div class="padding">
        <h2>Work Experience</h2>
        <div>
          <work-experience
            v-for="(experience, idx) in resume.workExperience"
            :key="idx"
            v-bind="experience"
          ></work-experience>
        </div>
      </div>
    </section>

    <section>
      <div class="padding">
        <h2>Skills</h2>
        <div>
          <skill
            v-for="(skill, idx) in resume.skills"
            :key="idx"
            v-bind="skill"
          ></skill>
        </div>
      </div>
    </section>

    <section>
      <div class="padding">
        <h2>Languages</h2>
        <div>
          <skill
            v-for="(language, idx) in resume.languages"
            :key="idx"
            v-bind="language"
          ></skill>
        </div>
      </div>
    </section>

    <section>
      <div class="padding">
        <h2>Relevant Experience</h2>
        <div>
          <relevant-experience
            v-for="(exp, idx) in resume.relevantExperience"
            :key="idx"
            v-bind="exp"
          ></relevant-experience>
        </div>
      </div>
    </section>

    <section>
      <div class="padding">
        <h2>Achievements</h2>
        <p v-for="(achievement, idx) in resume.achievements" :key="idx">
          {{ achievement.description }} ({{ achievement.date }})
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import {
  Education,
  WorkExperience,
  Skill,
  RelevantExperience
} from "./templates";

export default {
  components: {
    Education,
    WorkExperience,
    Skill,
    RelevantExperience
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
  padding: 0mm 4mm;
}

.container > * {
  width: 50%;
}

.padding {
  padding: 2mm 4mm;
}
</style>
