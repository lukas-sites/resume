<template>
  <nav>
    <a v-for="(col, idx) in cols" :key="idx" :href="col.href" target="_blank">
      <font-awesome-icon :icon="col.icon" style="margin-right: 0.5mm" />
      {{ col.value }}
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    const email = "lherman.cs@gmail.com";
    const phone = "864-624-3757";
    const address = "Easley, SC";
    const linkedin = "linkedin.com/in/lukas-herman";
    const github = "github.com/lherman-cs";

    return {
      cols: [
        { icon: "envelope", value: email, href: `mailto:${email}` },
        { icon: "mobile-alt", value: phone, href: `tel:${phone}` },
        {
          icon: "map-marker-alt",
          value: address,
          href: `https://maps.google.com/?q=${address}`
        },
        {
          icon: ["fab", "linkedin-in"],
          value: linkedin,
          href: `https://${linkedin}`
        },
        {
          icon: ["fab", "github"],
          value: github,
          href: `https://${github}`
        }
      ]
    };
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #323639;
  height: 8mm;
  color: white;
}
</style>
