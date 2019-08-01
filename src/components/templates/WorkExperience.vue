<template>
  <section>
    <h2>{{ position }}</h2>
    <h3>{{ company }}</h3>
    <div style="display: flex; justify-content: space-between;">
      <div>{{ date }}</div>
      <div>{{ where }}</div>
    </div>
    <h4>Achievements</h4>
    <ul>
      <li v-for="(achievement, idx) in achievements" :key="idx">
        {{ achievement }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    position: String,
    company: String,
    date: String,
    where: String,
    achievements: Array
  }
};
</script>
