<template>
  <section>
    <h3>{{ position }}</h3>
    <h4>{{ company }}</h4>
    <div style="display: flex; justify-content: space-between;">
      <div>{{ date }}</div>
      <div>{{ where }}</div>
    </div>
    <div>Achievements/Tasks</div>
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
