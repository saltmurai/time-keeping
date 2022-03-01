<template>
  <div class="d-flex flex-column text-center fill-height">
    <h1>Nhap ma pin</h1>
    <p :class="text_color">{{ text }}</p>
    <div class="text-center justify-center" style="max-width: 400px">
      <v-otp-input
        ref="test"
        class="pa-3"
        v-model="otp"
        @finish="onFinish"
        type="number"
      ></v-otp-input>
      <v-overlay absolute :value="loading">
        <v-progress-circular indeterminate color="primary">
        </v-progress-circular>
      </v-overlay>
    </div>
    <div>
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
      text: "Vui long nhap ma pin 6 chu so de dang nhap",
      text_color: "",
      expectedOtp: "123456",
      inputOtp: "",
    };
  },
  methods: {
    onFinish(rsp) {
      this.inputOtp = rsp;
    },
    onLogin() {
      this.loading = true;
      setTimeout(() => {
        console.log(this.inputOtp);
        this.loading = false;
        if (this.inputOtp === this.expectedOtp) {
          this.$router.push("/menu");
        } else {
          this.text = "Ma pin chua chinh xac, vui long nhap lai";
          this.$refs.test.reset();
          this.text_color = "red--text";
        }
      }, 1500);
    },
  },
};
</script>
