<template>
  <section>
    <h2>{{ degree }}</h2>
    <h3>{{ from }}</h3>
    <div style="display: flex; justify-content: space-between;">
      <div>{{ date }}</div>
      <div>{{ gpa }}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    degree: String,
    from: String,
    date: String,
    gpa: String
  }
};
</script>
