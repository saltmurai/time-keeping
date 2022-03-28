<script>
export default {
  data() {
    return {
      overlay: false,
      toggle: false,
    };
  },
  methods: {
    sendBugReport() {
      this.overlay = true;
    },
  },
  computed: {
    isSuccess() {
      return this.toggle;
    },
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
          this.$router.push("/bug-report-success");
        }, 2000);
    },
  },
};
</script>

<template>
  <div id="bug-report-container" class="d-flex flex-column fill-height pa-0">
    <v-toolbar dense max-height="50px" flat width="100%">
      <v-icon @click="$router.back()">mdi-arrow-left</v-icon>
      <v-spacer />
      <v-toolbar-title>Bao loi</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <div class="flex-grow-1 d-flex align-center">
      <v-card class="ma-3" flat>
        <v-card-text class="d-flex flex-column text-center">
          <v-img
            height="240"
            width="240"
            src="../assets/thumb-up.png"
            class="mx-auto"
          ></v-img>
          Báo cáo về lỗi của bạn gặp phải đã được gửi thành công. Báo cáo của
          bạn sẽ giúp chúng tôi hoàn thiện sản phẩm tốt hơn.

          <span class="font-weight-bold">Chân thành cảm ơn!</span>
        </v-card-text>
      </v-card>
    </div>
    <div class="d-flex justify-center flex-column">
      <v-btn
        color="green"
        class="text-none white--text mx-auto mb-3"
        width="80%"
        max-width="400px"
        @click="sendBugReport"
        >Gui bao loi</v-btn
      >
      <footer class="grey--text mx-auto mb-3">
        Trung tam bong ro JunSport
      </footer>
    </div>
  </div>
</template>

<style scoped>
#bug-report-container {
  background-color: #ecedf5;
  margin: 0;
}
</style>
