<template>
  <div class="d-flex flex-column justify-center fill-height align-center pb-16">
    <v-btn
      to="/pick-location"
      max-width="400"
      color="#6AA84F"
      large
      width="80%"
      class="white--text text-none mb-4"
      >Chấm Công</v-btn
    >
    <v-btn
      to="/face-scan"
      max-width="400"
      color="#6AA84F"
      large
      width="80%"
      class="white--text text-none mb-4"
      >Quét khuôn mặt</v-btn
    >
    <v-btn
      to="/face-scan"
      max-width="400"
      color="#6AA84F"
      large
      width="80%"
      class="white--text text-none"
      >Thay đổi thông tin cá nhân</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
