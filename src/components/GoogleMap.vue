<template>
  <GmapMap
    :center="center"
    :zoom="16"
    style="width: 100%; height: 100%"
    :options="mapOptions"
  >
    <GmapMarker
      :position="{ lat: location.lat, lng: location.lng }"
      :title="location.name"
      @click="openInfoWindowTemplate"
    />
    <gmap-info-window
      :position="{ lat: location.lat, lng: location.lng }"
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
  props: {
    center: {
      required: true,
    },
    location: {
      type: Object,
    },
  },
  data() {
    return {
      mapOptions: {
        disableDefaultUI: true,
      },
      infoWindow: {
        position: { lat: this.location.lat, lng: this.location.lng },
        open: false,
        template: ``,
      },
    };
  },
  methods: {
    openInfoWindowTemplate() {
      this.infoWindow.open = !this.infoWindow.open;
      this.infoWindow.template = `<b>${this.location.name}</b><br>${this.location.street}`;
    },
  },
};
</script>
