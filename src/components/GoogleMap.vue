<template>
  <GmapMap
    :center="junsport"
    :zoom="16"
    style="width: 100%; height: 100%"
    :options="mapOptions"
  >
    <GmapMarker
      :position="junsport"
      title="ABCD"
      @click="openInfoWindowTemplate"
    />
    <gmap-info-window
      :position="junsport"
      :options="{
        maxWidth: 300,
        pixelOffset: { width: 0, height: -35 },
      }"
      :opened="infoWindow.open"
      @closeclick="infoWindow.open = false"
    >
      <div v-html="infoWindow.template"></div
    ></gmap-info-window>
  </GmapMap>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 10, lng: 10 },
      junsport: { lat: 21.02952, lng: 105.813 },
      errorMess: "",
      mapOptions: {
        disableDefaultUI: true,
      },
      infoWindow: {
        position: { lat: 0, lng: 0 },
        open: false,
        template: "",
      },
    };
  },
  created() {
    if (!("geolocation" in navigator)) {
      this.errorMess = "Geolocation is not available";
      console.log("No geolocate");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        console.log(this.center.lat);
      },
      (err) => {
        console.log("Error");
        this.errorMess = err;
      }
    );
  },
  methods: {
    openInfoWindowTemplate() {
      const { lat, lng } = this.junsport;
      this.infoWindow.position = { lat: lat, lng: lng };
      this.infoWindow.template = `
                              <b>Junsport</b><br>Nguyen Chi Thanh<br>Hanoi<br>`;
      this.infoWindow.open = true;
    },
  },
};
</script>
