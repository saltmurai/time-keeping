<script>
export default {};
</script>
<template>
  <div id="container" class="d-flex flex-column fill-height">
    <v-toolbar elevation="2" max-height="55px"
      ><v-toolbar-title class="mx-auto">Cham cong thanh cong</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-column align-center white mt-3 pa-3">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="300"
        width="300"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      <span class="green--text">Cham cong thanh cong</span>
      <span>Ban da thuc hien cham cong thanh cong</span>
    </div>
    <div class="white mt-3 pa-3">
      <div class="ml-3 mr-3">
        <div class="grey--text text-caption">Buoi day</div>
        <div>Ca Sang 1: 08:00 - 10:00</div>
        <v-divider />
      </div>
      <div class="ml-3 mr-3">
        <div class="grey--text text-caption">Nhan Su</div>
        <div>
          <v-avatar size="25">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            /> </v-avatar
          ><span class="ml-2">Nguyen Quang Minh</span>
        </div>
        <v-divider class="mt-1" />
      </div>
      <div class="ml-3 mr-3">
        <div class="grey--text text-caption">Thoi gian ghi nhan</div>
        <div><v-icon>mdi-domain</v-icon> <span>8.00 AM 20/03/2021</span></div>
        <v-divider />
      </div>
    </div>
    <div class="white fill-height d-flex flex-column align-center mt-3">
      <v-spacer />
      <v-btn width="20%" class="text-none text-h5 mb-3" plain min-width="120px"
        ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
      >
      <footer class="grey--text">Trung tam bong ro JunSport</footer>
    </div>
  </div>
</template>

<style scoped>
#container {
  background: #ecedf5;
}
</style>
