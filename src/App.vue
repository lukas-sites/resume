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
  font-family: "Ubuntu", sans-serif;
  font-size: 70%;
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

.flex-spacer {
  flex-grow: 1;
}
</style>
