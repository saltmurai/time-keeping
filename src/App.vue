<template>
  <v-app id="app">
    <v-app-bar flat v-if="$route.meta.showNav" color="#6AA64F" app>
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
    return {};
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}
#app {
  display: flex;
}
</style>
