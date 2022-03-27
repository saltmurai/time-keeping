<script>
import { FaceDetection } from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
// import { drawLandmarks, drawRectangle } from "@mediapipe/drawing_utils";

export default {
  name: "FaceModel",
  components: {
    // PopUpId,
  },
  data: function () {
    return {
      bottomDialog: false,
      middleDialog: false,
      user: {
        name: "Nguyen Quang Minh",
        id: "001",
      },
      popUpCard: {
        icon: "mdi-wifi",
        error: "Placeholder text",
        errorText: "Placeholder text",
        action: "placeholder",
      },
      timerCount: 3,
      timerEnabled: true,
      camera: null,
      canvasElement: null,
      videoElement: null,
      faceDetection: null,
      resultImage: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.videoElement = this.$refs.input_video;
      this.canvasElement = this.$refs.canvas;
      this.canvasElement.height = window.innerHeight;
      this.canvasElement.width = window.innerWidth;
      this.canvasCtx = this.canvasElement.getContext("2d");
      this.faceDetection = new FaceDetection({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.4/${file}`;
        },
      });
      this.faceDetection.setOptions({
        selfieMode: true,
        model: "short",
        minDetectionConfidence: 0.9,
      });
      this.faceDetection.onResults(this.onResults);
      this.camera = new Camera(this.videoElement, {
        onFrame: async () => {
          await this.faceDetection.send({ image: this.videoElement });
        },
        width: window.innerWidth,
        height: window.innerHeight,
      });
      this.play();
    },
    onResults(results) {
      this.canvasCtx.save();
      this.canvasCtx.clearRect(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      this.canvasCtx.drawImage(
        results.image,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      if (results.detections.length > 0 || this.timerCount === 0) {
        console.log("work");
        this.resultImage = results.image;
        this.pause();
        this.middleDialog = true;
        this.bottomDialog = true;
        this.renderImage();
      }
      this.canvasCtx.restore();
    },
    play() {
      this.camera.start();
      this.timerEnabled = true;
    },
    pause() {
      //console.log(this.lastFrame)
      this.timerEnabled = false;
      this.camera.stop();
    },
    renderImage() {
      this.lastFrameCanvas.width = window.innerWidth;
      this.lastFrameCanvas.height = window.innerHeight;
      const lastFrameCanvasCtx = this.lastFrameCanvas.getContext("2d");
      lastFrameCanvasCtx.drawImage(
        this.resultImage,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
    },
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },

    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  computed: {
    toggleCanvas() {
      return this.timerEnabled;
    },
    lastFrameCanvas() {
      return this.$refs.lastFrame;
    },
  },
};
</script>

<template>
  <div id="container" class="d-flex justify-center">
    <span class="count-down pt-10 white--text">{{ timerCount }}s</span>
    <v-dialog content-class="rounded-dialog" v-model="middleDialog" persistent>
      <v-card>
        <v-card>
          <v-card-title class="text-h6 d-flex flex-column">
            <v-icon>{{ popUpCard.icon }}</v-icon>
            <span class="text-h5 red--text">{{ popUpCard.error }}</span>
          </v-card-title>
          <v-card-text class="d-flex justify-center"
            >{{ popUpCard.errorText }}
          </v-card-text>
          <v-card-actions class="d-flex flex-column">
            <v-btn
              max-width="400"
              color="#6AA84F"
              large
              width="95%"
              class="white--text text-none mx-auto mb-1"
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
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="bottomDialog"
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
    <div v-show="toggleCanvas" class="canvas-container">
      <canvas ref="canvas" id="output_canvas"></canvas>
    </div>
    <div v-show="!toggleCanvas">
      <canvas ref="lastFrame" id="last-frame"></canvas>
    </div>
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
#container {
  overflow: hidden;
}
#last-frame {
  display: block;
}
#input_video {
  display: none;
}

#output_canvas {
  display: block;
}

.count-down {
  position: absolute;
}

/*Align dialog to botom*/
>>> .bottom-dialog {
  align-self: flex-end;
  margin-bottom: 50px;
}

>>> .rounded-dialog {
  border-radius: 10px;
}
</style>
