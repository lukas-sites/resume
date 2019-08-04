<template>
  <section>
    <div style="display: flex; justify-content: space-between;">
      <h3>{{ title }}</h3>
      <h4>{{ date }}</h4>
    </div>
    <ul>
      <li v-for="(description, idx) in descriptions" :key="idx">
        {{ description }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    descriptions: Array
  }
};
</script>
