<template>
  <section>
    <div style="display: flex; justify-content: space-between;">
      <h5>{{ title }}</h5>
      <div>{{ date }}</div>
    </div>
    <ul>
      <li v-for="(description, idx) in descriptions" :key="idx" class="me-sm">
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
