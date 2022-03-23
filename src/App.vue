<template>
  <v-app id="app">
    <v-app-bar v-if="$route.meta.showNav" color="#6AA64F" app>
      <v-img
        class="mx-auto"
        contain
        height="50px"
        src="@/assets/time.png"
      ></v-img>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      vh: null,
    };
  },
  methods: {
    init() {
      this.vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${this.vh}px`);
    },
    onResize(event) {
      console.log("Resized", event);
      this.vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${this.vh}px`);
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
  height: 100%;
}
</style>
