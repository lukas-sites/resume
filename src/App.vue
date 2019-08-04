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
  font-size: 6mm;
}

h2 {
  font-size: 5mm;
}

h3 {
  font-size: 4mm;
}

h4 {
  font-size: 3mm;
}

a {
  color: inherit;
  text-decoration: none;
}

.flex-spacer {
  flex-grow: 1;
}
</style>
