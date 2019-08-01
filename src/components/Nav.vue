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
  props: {
    email: String,
    phone: String,
    address: String,
    linkedin: String,
    github: String
  },
  data() {
    return {
      cols: [
        { icon: "envelope", value: this.email, href: `mailto:${this.email}` },
        { icon: "mobile-alt", value: this.phone, href: `tel:${this.phone}` },
        {
          icon: "map-marker-alt",
          value: this.address,
          href: `https://maps.google.com/?q=${this.address}`
        },
        {
          icon: ["fab", "linkedin-in"],
          value: this.linkedin,
          href: `https://${this.linkedin}`
        },
        {
          icon: ["fab", "github"],
          value: this.github,
          href: `https://${this.github}`
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
