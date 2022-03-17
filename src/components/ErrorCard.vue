<template>
  <v-card class="rounded-xl">
    <v-card-title class="text-h6 d-flex flex-column">
      <v-icon>{{ error.icon }}</v-icon>
      <span class="text-h5 red--text">{{ error.mess }}</span>
    </v-card-title>
    <v-card-text>{{ error.detail }}</v-card-text>
    <v-card-actions class="d-flex flex-column">
      <v-btn
        max-width="400"
        color="#6AA84F"
        large
        width="95%"
        class="white--text text-none mx-auto mb-1"
        >{{ error.buttonText }}</v-btn
      >
      <v-spacer />
      <v-btn
        width="20%"
        depressed
        class="mx-auto text-none grey--text"
        small
        plain
        ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ErrorCard",
  props: {
    error: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>
