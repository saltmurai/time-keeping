<template>
  <v-app>
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
