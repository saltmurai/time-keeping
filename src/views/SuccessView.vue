<script>
export default {};
</script>
<template>
  <div id="container" class="d-flex flex-column fill-height">
    <v-toolbar flat max-height="55px"
      ><v-toolbar-title class="mx-auto">Chấm công thành công</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-column align-center white mt-3 pa-3">
      <v-img height="240" width="262" src="../assets/success.png"></v-img>
      <span class="green--text">Chấm công thành công</span>
      <span>Bạn đã thực hiện chấm công thành công</span>
    </div>
    <div class="white mt-3 pa-3 pb-10">
      <div class="ml-3 mr-3">
        <div class="grey--text text-caption">Buổi dạy</div>
        <div>Ca Sáng 1: 08:00 - 10:00</div>
        <v-divider />
      </div>
      <div class="ml-3 mr-3">
        <div class="grey--text text-caption">Nhân sự</div>
        <div>
          <v-avatar size="25">
            <img src="../assets/avatar.png" alt="John" /> </v-avatar
          ><span class="ml-2">Nguyễn Quang Minh</span>
        </div>
        <v-divider class="mt-1" />
      </div>
      <div class="ml-3 mr-3">
        <div class="grey--text text-caption">Thời gian ghi nhận</div>
        <div>
          <v-icon>mdi-calendar-month</v-icon>
          <span class="mt-1">8.00 AM 20/03/2021</span>
        </div>
        <v-divider />
      </div>
    </div>
    <div class="fill-height d-flex flex-column align-center mt-3">
      <v-spacer />
      <v-btn
        width="20%"
        class="text-none text-h5 mb-3"
        to="/bug-report"
        plain
        min-width="120px"
        ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
      >
      <footer class="grey--text mb-5">Trung tâm bóng rổ Junsport</footer>
    </div>
  </div>
</template>

<style scoped>
#container {
  background: #ecedf5;
}
</style>
