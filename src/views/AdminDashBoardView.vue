<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dữ liệu chấm công</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <v-data-table
        style="max-width: 80%"
        class="mx-auto"
        dense
        :headers="headers"
        :items="tableItems"
      ></v-data-table>
    </v-main>
  </v-app>
</template>

<script>
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebase";

const fbApp = initializeApp(firebaseConfig);
const fireStore = getFirestore(fbApp);
const userCol = collection(fireStore, "checkin");

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      tableItems: [],
      headers: [
        {
          text: "Checkin ID",
          align: "start",
          value: "id",
        },
        { text: "Location", value: "locationName" },
        { text: "Street", value: "streetName" },
        { text: "User", value: "userId" },
        { text: "Time", value: "createdAt" },
      ],
    };
  },
  async mounted() {
    const q = query(userCol, orderBy("createdAt"), limit(100));
    const data = await getDocs(q);
    let items = [];
    data.forEach((d) => {
      const newItem = {
        id: d.id,
        locationName: d.data().location.name,
        streetName: d.data().location.street,
        userId: d.data().user.email,
        createdAt: d.data().createdAt.toDate(),
      };
      items.push(newItem);
    });
    this.tableItems = items;
  },
};
</script>
