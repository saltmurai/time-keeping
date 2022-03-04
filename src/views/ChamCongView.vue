<template>
  <div class="d-flex flex-column fill-height">
    <v-img
      src="https://picsum.photos/id/11/500/300"
      max-height="400px"
      min-height="300px"
    ></v-img>
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
            hide-details
            append-icon="mdi-magnify"
            single-line
            class="ma-3 shrink"
            outlined
            placeholder="Tim lop hoc"
          ></v-text-field>
          <v-card-text style="height: 50%">
            <v-radio-group v-model="dialogm1" column @change="pickClass">
              <v-radio
                v-for="item in items"
                :key="item.class"
                :label="`${item.class}`"
                :value="item.class"
                class="ma-3"
              >
                <p>test</p>
              </v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn
              max-width="400"
              :color="buttonColor"
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
          :color="buttonColor"
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
export default {
  data() {
    return {
      buttonColor: "grey",
      dialog: false,
      chonLop: "Chon lop",
      dialogm1: "",
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
    };
  },
  methods: {
    pickClass() {
      console.log(this.dialogm1);
      this.buttonColor = "#6AA84F";
    },
    xacNhanButton() {
      if (this.dialogm1 !== null) {
        this.dialog = false;
        this.chonLop = this.dialogm1;
      }
    },
  },
};
</script>
