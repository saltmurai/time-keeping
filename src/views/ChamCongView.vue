<template xmlns:v-radio="http://www.w3.org/1999/html">
  <div class="d-flex flex-column fill-height">
    <div id="maps">
      <google-map :center="center" :location="currentLoc"></google-map>
    </div>
    <v-card class="fill-height rounded-lg d-flex flex-column">
      <v-dialog
        v-model="dialog"
        fullscreen
        scrollable
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <div>
            <div
              class="d-flex flex-row align-center pa-3"
              v-bind="attrs"
              v-on="on"
            >
              <p class="mb-auto">{{ chonLop }}</p>
              <v-spacer></v-spacer>
              <v-icon>mdi-chevron-down</v-icon>
            </div>
            <v-divider></v-divider>
            <v-row class="align-start">
              <v-col>
                <div class="d-flex flex-row align-center pl-2">
                  <span class="mb-1">Thay doi gio</span>
                  <v-spacer></v-spacer>
                  <v-switch inset></v-switch>
                </div>
                <v-divider></v-divider>
              </v-col>
              <v-col>
                <div class="d-flex flex-row align-center">
                  <span class="mb-1">Doi dia diem</span>
                  <v-spacer />
                  <v-switch inset></v-switch>
                </div>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </div>
        </template>
        <v-card>
          <v-toolbar dense max-height="50px">
            <v-icon @click="dialog = false">mdi-arrow-left</v-icon>
            <v-spacer />
            <v-toolbar-title>Chon lop hoc</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-text-field
            v-model="search"
            hide-details
            append-icon="mdi-magnify"
            single-line
            class="ma-3 shrink"
            outlined
            placeholder="Tim lop hoc"
          ></v-text-field>
          <h3 class="ml-4">Danh sach</h3>
          <v-card-text style="height: 50%">
            <v-radio-group v-model="dialogm1" column>
              <div
                v-for="item in filtredClass"
                :key="item.class"
                :value="items.class"
              >
                <div class="d-flex flex-row">
                  <div class="d-flex flex-column">
                    <h4>{{ item.class }}</h4>
                    <p>{{ item.time }}</p>
                  </div>
                  <v-spacer></v-spacer>
                  <v-radio
                    v-model="item.class"
                    @click="handleClick(item.class, item.time)"
                  ></v-radio>
                </div>
                <v-divider class="ma-1"></v-divider>
              </div>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn
              max-width="400"
              :color="handleButtonColor"
              large
              width="80%"
              class="white--text text-none mb-3 mx-auto"
              @click="xacNhanButton"
              >Xac nhan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column justify-center align-center">
        <v-btn
          max-width="400"
          :color="handleButtonColor"
          large
          width="80%"
          class="white--text text-none mb-3"
          >Cham Cong</v-btn
        >
        <v-spacer />
        <v-btn
          width="20%"
          depressed
          class="mb-8 text-none grey--text"
          small
          plain
          ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
// import GoogleMap from "../components/GoogleMap";
import GoogleMap from "@/components/GoogleMap";
export default {
  components: {
    GoogleMap,
    // GoogleMap,
  },
  data() {
    return {
      buttonColor: "grey",
      dialog: false,
      chonLop: "Chon lop",
      dialogm1: "",
      search: "",
      center: { lat: 10, lng: 10 },
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
      items: [
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
    handleClick(ca, thoiGian) {
      this.chonLop = ca.concat(" ", thoiGian);
      console.log(this.chonLop);
    },
    distance(lat1, lng1, lat2, lng2) {
      // calculate distance given coordinates in metter
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
    filtredClass() {
      return this.items.filter((item) =>
        item.class.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    handleButtonColor() {
      return this.chonLop === "Chon lop" ? "grey" : "#6AA84F";
    },
    markerPos() {
      return this.locations.filter((location) => location.locationId === 1);
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
        this.center.lat = pos.coords.latitude;
        this.center.lng = pos.coords.longitude;
        for (const location of this.locations) {
          let dis = this.distance(
            this.center.lat,
            this.center.lng,
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
        console.log("Error");
        alert("Can't get location");
        this.errorMess = err;
      }
    );
  },
};
</script>

<style scoped>
#maps {
  background-color: teal;
  height: 70%;
}
</style>
