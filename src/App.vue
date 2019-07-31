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
  font-size: 2.7mm;
  background-color: #323639;
  margin: 0;
}

h1 {
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
}

h2 {
  margin-block-start: 0.15em;
  margin-block-end: 0.15em;
}

p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}

a {
  color: inherit;
  text-decoration: none;
}

.flex-spacer {
  flex-grow: 1;
}
</style>
