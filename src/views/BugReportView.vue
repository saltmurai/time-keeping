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
    <v-toolbar dense max-height="50px" flat>
      <v-icon @click="$router.back()">mdi-arrow-left</v-icon>
      <v-spacer />
      <v-toolbar-title>Báo lỗi </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card class="mt-3" flat>
      <v-card-title> Chọn loại lỗi </v-card-title>
      <v-card-text>
        <v-chip-group active-class="green--text green" column>
          <v-chip outlined> Không nhận diện được </v-chip>
          <v-chip outlined> Thiếu buổi dạy / Thiếu tên nhân sự </v-chip>
          <v-chip outlined> Vị trí không chính xác </v-chip>
          <v-chip outlined> Treo phần mềm </v-chip>
          <v-chip outlined> Lỗi Khác </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-card class="mt-3 d-flex flex-column" flat>
      <v-card-title> Mô tả lỗi </v-card-title>
      <v-card-text class="flex-grow-1">
        <v-textarea
          rows="10"
          outlined
          color="green"
          placeholder="Chi tiết lỗi gặp phải"
        ></v-textarea
      ></v-card-text>
    </v-card>
    <v-btn
      color="green"
      class="text-none mt-auto mt-3 ma-3 white--text"
      @click="sendBugReport"
    >
      Gửi báo lỗi
    </v-btn>
    <v-overlay absolute :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<style scoped>
#bug-report-container {
  background-color: #ecedf5;
  margin: 0;
}
</style>
