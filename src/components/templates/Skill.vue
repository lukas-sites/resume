<template>
  <section
    style="display: flex; justify-content: space-between; align-items: center;"
  >
    <div style="width: 50mm">{{ description }}</div>
    <svg
      :height="`${(r + strokeWidth) * 2}mm`"
      :width="`${(r + strokeWidth) * 2 + offset * (maxLevel - 1)}mm`"
    >
      <circle
        v-for="i in maxLevel"
        :key="i"
        :cx="`${r + strokeWidth + offset * (i - 1)}mm`"
        :cy="`${r + strokeWidth}mm`"
        :r="`${r}mm`"
        v-bind:style="{ fill: i <= level ? stroke : 'white' }"
        :stroke="stroke"
        :stroke-width="`${strokeWidth}mm`"
      />
    </svg>
  </section>
</template>

<script>
export default {
  props: {
    description: String,
    level: Number
  },
  data() {
    return {
      offset: 6,
      r: 1.75,
      stroke: "#4E8FCC",
      strokeWidth: 0.3,
      maxLevel: 5
    };
  }
};
</script>

<style scoped>
circle {
  fill: #4e8fcc;
}
</style>
