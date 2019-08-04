<template>
  <section>
    <h3>{{ degree }}</h3>
    <h4>{{ from }}</h4>
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
