<script>
// import { Camera } from "@mediapipe/camera_utils";
export default {
  data() {
    return {
      pickedStaff: null,
      popUpCard: {
        icon: "mdi-account-cicle-outline",
        error: "Dao tao du lieu thanh cong",
        errorText:
          "Ban da co du lieu khuon mat, gio ban co the bat dau cham cong",
        action: "Cham cong",
      },
      search: "",
      middleDialog: false,
      bottomDialog: false,
      pickStaffDialog: true,
      radioGroup: "",
      infoDialog: {
        title: "Quet mat thanh cong",
        text: "Vui long doi qua trinh dao tao du lieu",
      },
      staffs: [
        { staffId: "0001", avatar: "", name: "Nguyen Van Nam" },
        { staffId: "0002", avatar: "", name: "Luong Mai" },
        { staffId: "0003", avatar: "", name: "Tran Manh Tuan" },
        { staffId: "0004", avatar: "", name: "Le Hoai My" },
        { staffId: "0005", avatar: "", name: "Hoang Manh Quyet" },
        { staffId: "0006", avatar: "", name: "Chu Thi Hao" },
        { staffId: "0007", avatar: "", name: "Nguyen Lam Anh" },
        { staffId: "0008", avatar: "", name: "Hua Ha Vi" },
        { staffId: "0009", avatar: "", name: "Le Quyet Thang" },
        { staffId: "0010", avatar: "", name: "Nguyen Quang Thanh" },
        { staffId: "0011", avatar: "", name: "Nguyen Huu Chien" },
      ],
    };
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "teal";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    handleClickMiddleDialog() {
      this.$router.push("face-confirmation");
    },
    handleClickRadio(staff) {
      console.log(this.pickStaffDialog);
      console.log(staff);
      this.pickedStaff = staff;
    },
    handleClickXacNhanButton() {
      this.pickStaffDialog = false;
      this.bottomDialog = true;
      setTimeout(() => {
        this.middleDialog = true;
      }, 1000);
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    filteredStaff() {
      return this.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    isChooseStaff() {
      return this.pickedStaff === null;
    },
  },
};
</script>

<template>
  <div class="d-flex flex-row fill-height">
    <v-dialog
      v-model="pickStaffDialog"
      fullscreen
      scrollable
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dense max-height="50px" elevation="1">
          <v-icon @click="pickStaffDialog = false">mdi-arrow-left</v-icon>
          <v-spacer />
          <v-toolbar-title>Chon nhan su</v-toolbar-title>
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
        <h3 class="ml-4">Danh Sách</h3>
        <v-card-text>
          <v-radio-group v-model="radioGroup" column>
            <div
              v-for="staff in filteredStaff"
              :key="staff.staffId"
              :value="staff.name"
            >
              <div class="d-flex flex-row align-center mt-3">
                <v-avatar size="32">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <span class="ml-2">{{ staff.name }}</span>
                <v-spacer></v-spacer>
                <v-radio
                  v-model="staff.staffId"
                  @click="handleClickRadio(staff)"
                ></v-radio>
              </div>
              <v-divider class="ma-1 mt-3"></v-divider>
            </div>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn
            max-width="400"
            color="green"
            :disabled="isChooseStaff"
            large
            width="80%"
            class="white--text text-none mb-3 mx-auto"
            @click="handleClickXacNhanButton"
            >Xác nhận</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog content-class="rounded-dialog" v-model="middleDialog" persistent>
      <v-card>
        <v-card-title class="d-flex flex-column">
          <v-icon x-large>{{ popUpCard.icon }}</v-icon>
          <span class="red--text mt-3">{{ popUpCard.error }}</span>
        </v-card-title>
        <v-card-text class="text-center"
          >{{ popUpCard.errorText }}
        </v-card-text>
        <v-card-actions class="d-flex flex-column">
          <v-btn
            max-width="400"
            color="#6AA84F"
            large
            width="95%"
            class="white--text text-none mx-auto mb-1"
            @click="handleClickMiddleDialog"
            >{{ popUpCard.action }}
          </v-btn>
          <v-spacer />
          <v-btn
            width="20%"
            depressed
            class="mx-auto text-none grey--text"
            small
            plain
          >
            <v-icon left>mdi-bug</v-icon>
            Báo lỗi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="bottomDialog"
      class="bottom-sheet-transition"
      content-class="bottom-dialog"
      persistent
      hide-overlay
      max-width="300px"
    >
      <v-card elevation="0">
        <v-card-title class="flex-column pa-2 text-body-1">
          <v-icon color="green" large>mdi-account-circle-outline</v-icon>
          <span class="green--text">{{ infoDialog.title }}</span>
        </v-card-title>
        <v-card-text class="text-center">
          <span>{{ infoDialog.text }}</span>
        </v-card-text>
      </v-card>
    </v-dialog>
    <video ref="camera" id="camera"></video>
    <canvas ref="canvas" id="canvas"></canvas>
    <v-btn
      width="100%"
      depressed
      absolute
      class="text-none grey--text align-self-end"
    >
      <v-icon left>mdi-bug</v-icon>
      Báo lỗi
    </v-btn>
  </div>
</template>

<style scoped>
>>> .bottom-dialog {
  align-self: flex-end;
  margin-bottom: 50px;
  elevation: 0;
}
#canvas {
  display: block;
}
#camera {
  display: none;
}
</style>
