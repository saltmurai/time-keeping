<template>
  <div
    id="login-container"
    class="d-flex flex-column text-center fill-height justify-space-around"
    @keyup.enter="onLogin"
  >
    <h1>Nhập mã pin</h1>
    <p :class="text_color">{{ text }}</p>
    <div class="text-center mx-auto" style="max-width: 400px">
      <v-otp-input
        ref="test"
        class="pa-3"
        v-model="otp"
        @finish="onLogin"
        @keyup.enter.native="onLogin"
        type="number"
      ></v-otp-input>
      <v-overlay absolute :value="loading">
        <v-progress-circular indeterminate color="primary">
        </v-progress-circular>
      </v-overlay>
    </div>
    <div class="mt-auto">
      <v-btn
        @click="onLogin"
        max-width="400"
        color="#6AA84F"
        large
        width="80%"
        class="white--text text-none mx-auto mb-3"
        >Đăng nhập</v-btn
      >
      <v-spacer />
      <v-btn
        width="20%"
        depressed
        class="mb-8 mx-auto text-none grey--text"
        small
        plain
        ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      snackbar: false,
      otp: "",
      text: "Vui lòng nhập mã pin 6 chữ số để đăng nhập",
      text_color: "",
      expectedOtp: "123456",
      inputOtp: "",
    };
  },
  methods: {
    onFinish(rsp) {
      this.inputOtp = rsp;
    },
    onLogin(rsp) {
      this.inputOtp = rsp;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (this.inputOtp === this.expectedOtp) {
          // remove comment for navigation guard
          // this.$store.commit("setAuthentication", true);
          this.$router.push("/menu");
          return;
        } else {
          this.text = "Mã Pin chưa chính xác, vui lòng nhập lại";
          this.$refs.test.reset();
          this.text_color = "red--text";
        }
      }, 1500);
    },
  },
};
</script>
<style scoped>
#login-container {
  height: 100%;
}
</style>
