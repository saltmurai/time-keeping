<template>
  <div id="container" class="d-flex justify-center">
    <span class="countdown pt-10">{{ timerCount }}</span>
    <v-dialog
      v-model="dialog"
      class="bottom-sheet-transition"
      content-class="bottom-dialog"
      persistent
      hide-overlay
      max-width="200px"
    >
      <v-card>
        <v-card-title class="d-flex justify-center pa-2">
          <v-icon color="green" large>mdi-account-circle-outline</v-icon>
        </v-card-title>
        <v-card-text
          class="d-flex justify-center align-center flex-column pb-2"
        >
          <span class="green--text">{{ user.name }}</span>
          <span>Ma nhan vien: {{ user.id }}</span>
        </v-card-text>
      </v-card>
    </v-dialog>
    <video ref="input_video" id="input_video"></video>
    <div class="canvas-container">
      <canvas ref="canvas" id="output_canvas"></canvas>
    </div>
    <v-btn
      width="100%"
      depressed
      absolute
      class="text-none grey--text align-self-end"
      ><v-icon left>mdi-bug</v-icon>Báo lỗi</v-btn
    >
  </div>
</template>
<script>
import { FaceDetection } from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
import { drawRectangle, drawLandmarks } from "@mediapipe/drawing_utils";
// import PopUpId from "../components/PopUpID";

export default {
  name: "FaceModel",
  components: {
    // PopUpId,
  },
  data: function () {
    return {
      dialog: false,
      user: {
        name: "Nguyen Quang Minh",
        id: "001",
      },
      timerCount: 30,
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    console.log(canvas);
    this.init();
  },
  methods: {
    init() {
      // Our input frames will come from here.
      const videoElement = this.$refs.input_video;
      const canvasElement = this.$refs.canvas;
      canvasElement.height = window.innerHeight;
      canvasElement.width = window.innerWidth;
      const canvasCtx = canvasElement.getContext("2d");
      const vm = this;
      function onResults(results) {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
          results.image,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );
        while (vm.timerCount > 0) {
          if (results.detections.length > 0) {
            drawRectangle(canvasCtx, results.detections[0].boundingBox, {
              color: "blue",
              lineWidth: 4,
              fillColor: "#00000000",
            });
            drawLandmarks(canvasCtx, results.detections[0].landmarks, {
              color: "red",
              radius: 5,
            });
            setTimeout(function () {
              camera.stop();
              vm.dialog = true;
            }, 2000);
          }
          canvasCtx.restore();
        }
      }
      const faceDetection = new FaceDetection({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.4/${file}`;
        },
      });
      faceDetection.setOptions({
        selfieMode: true,
        model: "short",
        minDetectionConfidence: 0.9,
      });
      faceDetection.onResults(onResults);

      const camera = new Camera(videoElement, {
        onFrame: async () => {
          await faceDetection.send({ image: videoElement });
        },
        width: window.innerWidth,
        height: window.innerHeight,
      });
      camera.start();
    },
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
#container {
  overflow: hidden;
}
#input_video {
  display: none;
}
#output_canvas {
  display: block;
  background-color: teal;
  height: 100vh;
  width: 100vw;
}
.countdown {
  position: absolute;
}
/*Align dialog to botom*/
>>> .bottom-dialog {
  align-self: flex-end;
  margin-bottom: 50px;
}
</style>
