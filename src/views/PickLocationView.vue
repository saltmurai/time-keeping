<template>
  <div class="d-flex flex-column fill-height">
    <!--    Dynamic map show based on current location ID-->
    <div v-if="currentLoc.locationId === 1" class="flex-grow-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.411787582883!2d105.80369381542727!3d21.0162031935816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab60a18390ab%3A0x8e9e0ccd4587ef4e!2sJunsport!5e0!3m2!1svi!2s!4v1648604398381!5m2!1svi!2s"
        style="border: 0; width: 100%"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="fill-height"
      ></iframe>
    </div>
    <div v-if="currentLoc.locationId === 2" class="flex-grow-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455c2ee01a76b%3A0xb118ceaa0cb97f16!2zU8OibiBiw7NuZyBN4bu5IMSQw6xuaCAy!5e0!3m2!1sen!2s!4v1646991976728!5m2!1sen!2s"
        style="border: 0; width: 100%"
        loading="lazy"
        class="fill-height"
      ></iframe>
    </div>
    <div v-if="currentLoc.locationId === 3" class="flex-grow-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455c2ee01a76b%3A0xb118ceaa0cb97f16!2zU8OibiBiw7NuZyBN4bu5IMSQw6xuaCAy!5e0!3m2!1sen!2s!4v1646991976728!5m2!1sen!2s"
        style="border: 0; width: 100%"
        loading="lazy"
        class="fill-height"
      ></iframe>
    </div>
    <!--    Menu card-->
    <v-card
      class="fill-height rounded-lg d-flex flex-column rounded-md"
      max-height="60%"
    >
      <v-card-text>
        <span class="pl-2 grey--text text-caption">Buổi dạy</span>
        <div class="d-flex flex-row align-center pa-2" @click="dialog = true">
          <p class="mb-auto">{{ pickedClass }}</p>
          <v-spacer></v-spacer>
          <v-icon>mdi-chevron-down</v-icon>
        </div>
        <v-divider></v-divider>
        <v-row class="align-start">
          <v-col>
            <div class="d-flex flex-row align-center pl-2">
              <span :class="isChangeTime">Thay đổi giờ</span>
              <v-spacer></v-spacer>
              <v-switch v-model="switchTime" inset color="#6AA84F"></v-switch>
            </div>
            <v-divider></v-divider>
          </v-col>
          <v-col>
            <div class="d-flex flex-row align-center">
              <span :class="isChangeLocation">Đổi địa điểm</span>
              <v-spacer />
              <v-switch
                v-model="switchLocation"
                inset
                color="#6AA84F"
              ></v-switch>
            </div>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions class="d-flex flex-column justify-center align-center">
        <v-btn
          max-width="400"
          :disabled="isChooseClass"
          to="/face-confirmation"
          color="green"
          large
          width="80%"
          class="white--text text-none mb-3"
          >Chấm Công</v-btn
        >
        <v-spacer />
        <v-btn
          width="20%"
          depressed
          class="mb-8 text-none grey--text"
          small
          to="/bug-report"
          plain
          ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
        >
      </v-card-actions>
    </v-card>
    <!--    Choose class dialog  -->
    <v-dialog
      v-model="dialog"
      fullscreen
      scrollable
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dense flat max-height="50px">
          <v-icon @click="dialog = false">mdi-arrow-left</v-icon>
          <v-spacer />
          <v-toolbar-title>Chọn lớp học</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-text-field
          v-model="search"
          hide-details
          append-icon="mdi-magnify"
          single-line
          class="ma-3 shrink"
          outlined
          placeholder="Tìm lớp học"
        ></v-text-field>
        <h3 class="ml-4">Danh Sách</h3>
        <v-card-text style="height: 50%">
          <v-radio-group column>
            <div
              v-for="item in filteredClass"
              :key="item.class"
              :value="classList.class"
            >
              <div class="d-flex flex-row">
                <div class="d-flex flex-column">
                  <h4>{{ item.class }}</h4>
                  <p>{{ item.time }}</p>
                </div>
                <v-spacer></v-spacer>
                <v-radio
                  v-model="item.class"
                  @click="chooseClass(item.class, item.time)"
                ></v-radio>
              </div>
              <v-divider class="ma-1"></v-divider>
            </div>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn
            max-width="400"
            :disabled="isChooseClass"
            color="green"
            large
            width="80%"
            class="white--text text-none mb-3 mx-auto"
            @click="xacNhanButton"
            >Xác nhận</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonColor: "grey",
      dialog: false,
      pickedClass: "Chọn lớp",
      switchTime: "",
      switchLocation: "",
      search: "",
      currentLoc: {
        locationId: 1,
        name: "Junsport",
        street: "Nguyen Chi Thanh",
        lat: 21.02952,
        lng: 105.813,
      },
      locations: [
        {
          locationId: 1,
          name: "Junsport",
          street: "Nguyen Chi Thanh",
          lat: 21.02952,
          lng: 105.813,
        },
        {
          locationId: 2,
          name: "Junsport To Huu",
          street: "To Huu",
          lat: 20.994745634429954,
          lng: 105.78940142565692,
        },
        {
          locationId: 3,
          name: "Junsport",
          street: "Me tri",
          lat: 21.016598568961513,
          lng: 105.78410119695928,
        },
      ],
      classList: [
        { class: "Ca sang 1", time: "8:00 - 9:00", locationId: 1 },
        { class: "Ca sang 2", time: "8:00 - 9:00", locationId: 1 },
        { class: "Ca sang 3", time: "8:00 - 9:00", locationId: 2 },
        { class: "Ca sang 4", time: "8:00 - 9:00", locationId: 2 },
        { class: "Ca sang 5", time: "8:00 - 9:00", locationId: 3 },
        { class: "Ca sang 6", time: "8:00 - 9:00", locationId: 3 },
        { class: "Ca sang 7", time: "8:00 - 9:00", locationId: 3 },
        { class: "Ca chieu 1", time: "8:00 - 9:00", locationId: 1 },
        { class: "Ca chieu 2", time: "8:00 - 9:00", locationId: 1 },
        { class: "Ca chieu 3", time: "8:00 - 9:00", locationId: 2 },
        { class: "Ca chieu 4", time: "8:00 - 9:00", locationId: 2 },
        { class: "Ca chieu 5", time: "8:00 - 9:00", locationId: 2 },
        { class: "Ca chieu 6", time: "8:00 - 9:00", locationId: 3 },
        { class: "Ca chieu 7", time: "8:00 - 9:00", locationId: 3 },
      ],
    };
  },
  methods: {
    xacNhanButton() {
      if (this.dialogm1 !== null) {
        this.dialog = false;
      }
    },
    chooseClass(ca, time) {
      this.pickedClass = `${ca} ${time}`;
    },
    distance(lat1, lng1, lat2, lng2) {
      // calculate distance given coordinates in meter
      let p = 0.017453292519943295; // Pi/180
      let c = Math.cos;
      let a =
        0.5 -
        c((lat2 - lat1) * p) / 2 +
        (c(lat1 * p) * c(lat2 * p) * (1 - c((lng2 - lng1) * p))) / 2;
      return 12742 * Math.asin(Math.sqrt(a)) * 1000;
    },
  },
  computed: {
    filteredClass() {
      return this.classList
        .filter((item) =>
          item.class.toLowerCase().includes(this.search.toLowerCase())
        )
        .filter((item) => item.locationId === this.currentLoc.locationId);
    },
    isChooseClass() {
      return this.pickedClass === "Chọn lớp";
    },
    isChangeTime() {
      return this.switchTime === true ? "mb-1" : "mb-1 grey--text";
    },
    isChangeLocation() {
      return this.switchLocation === true ? "mb-1" : "mb-1 grey--text";
    },
  },
  created() {
    if (!("geolocation" in navigator)) {
      this.errorMess = "Geolocation is not available";
      console.log("No geolocate");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        for (const location of this.locations) {
          let dis = this.distance(
            pos.coords.latitude,
            pos.coords.longitude,
            location.lat,
            location.lng
          );
          if (dis < 2500) {
            this.currentLoc = location;
            console.log(this.currentLoc);
            break;
          }
          console.log(dis);
        }
      },
      (err) => {
        alert("Can't get location");
        this.errorMess = err;
      }
    );
  },
};
</script>

<style scoped></style>
