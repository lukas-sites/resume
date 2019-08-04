<template>
  <div id="app">
    <resume></resume>
  </div>
</template>

<script>
import Resume from "./components/Resume.vue";

export default {
  name: "app",
  components: {
    Resume
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  background-color: #323639;
  margin: 0;
  font-size: 3.2mm;
}

h1 {
  font-size: 7.5mm;
}

h2 {
  font-size: 5.5mm;
}

h3 {
  font-size: 4.5mm;
}

h4 {
  font-size: 3.5mm;
}

h5 {
  font-size: 3.35mm;
}

h1,
h2,
h3,
h4,
h5 {
  margin-block-start: 1mm;
  margin-block-end: 1mm;
}

a {
  color: inherit;
  text-decoration: none;
  font-size: 0.9em;
}

.flex-spacer {
  flex-grow: 1;
}

ul {
  margin-block-start: 1mm;
  margin-block-end: 1mm;
  padding-inline-start: 8mm;
}

li {
  margin-block-end: 0.75mm;
}
</style>
