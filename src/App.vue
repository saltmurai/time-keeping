<template>
  <v-app id="app">
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
    />
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
export default {};
</script>

<style>
/*#app {*/
/*  font-family: Inter;*/
/*  font-size: x-large;*/
/*}*/
</style>
