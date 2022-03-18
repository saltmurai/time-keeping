<template>
  <div class="container">
    <video class="input_video" width="100%" height="100%"></video>
    <div class="canvas-container">
      <canvas class="output_canvas" width="1280px" height="720px"> </canvas>
    </div>
  </div>
</template>
<script>
import { FaceDetection } from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
import { drawRectangle, drawLandmarks } from "@mediapipe/drawing_utils";

export default {
  name: "FaceModel",
  data: function () {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    onResults(results) {
      const canvasElement = document.getElementsByClassName("output_canvas")[0];
      const ctx = canvasElement.getContext("2d");
      ctx.save();
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      ctx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      if (results.detections.length > 0) {
        drawRectangle(this.ctx, results.detections[0].boundingBox, {
          color: "blue",
          lineWidth: 4,
          fillColor: "#00000000",
        });
        drawLandmarks(this.ctx, results.detections[0].landmarks, {
          color: "red",
          radius: 5,
        });
      }
      this.ctx.restore();
    },
    init() {
      const inputVideo = document.getElementsByClassName("input_video")[0];
      const face = new FaceDetection({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.4/${file}`;
        },
      });
      face.setOptions({
        modelSelection: "short",
        minDetectionConfidence: 0.5,
      });
      face.onResults(this.onResults);

      const camera = new Camera(inputVideo, {
        onFrame: async () => {
          await face.send({ image: inputVideo });
        },
      });
      camera.start();
    },
  },
};
</script>
<style scoped></style>
