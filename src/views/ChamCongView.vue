<template xmlns:v-radio="http://www.w3.org/1999/html">
  <div class="d-flex flex-column fill-height">
    <div id="maps">
      <google-map></google-map>
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
      items: [
        { class: "Ca sang 1", time: "8:00 - 9:00" },
        { class: "Ca sang 2", time: "8:00 - 9:00" },
        { class: "Ca sang 3", time: "8:00 - 9:00" },
        { class: "Ca sang 4", time: "8:00 - 9:00" },
        { class: "Ca sang 5", time: "8:00 - 9:00" },
        { class: "Ca sang 6", time: "8:00 - 9:00" },
        { class: "Ca sang 7", time: "8:00 - 9:00" },
        { class: "Ca chieu 1", time: "8:00 - 9:00" },
        { class: "Ca chieu 2", time: "8:00 - 9:00" },
        { class: "Ca chieu 3", time: "8:00 - 9:00" },
        { class: "Ca chieu 4", time: "8:00 - 9:00" },
        { class: "Ca chieu 5", time: "8:00 - 9:00" },
        { class: "Ca chieu 6", time: "8:00 - 9:00" },
        { class: "Ca chieu 7", time: "8:00 - 9:00" },
        { class: "Ca chieu 8", time: "8:00 - 9:00" },
        { class: "Ca chieu 9", time: "8:00 - 9:00" },
      ],
      errorMess: "",
      location: { lat: null, lng: null },
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
  },
};
</script>

<style scoped>
#maps {
  background-color: teal;
  height: 70%;
}
</style>
