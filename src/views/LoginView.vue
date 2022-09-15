<script>
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
const provider = new GoogleAuthProvider();
export default {
  data() {
    return {
      email: "",
      password: "",
      alert: false,
    };
  },
  methods: {
    onGoogleLogin() {
      signInWithPopup(auth, provider).then(() => {
        this.$store.commit("setAuthentication", true);
        this.$router.push("/menu");
      });
    },
    onLogin() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$store.commit("setAuthentication", true);
          this.$router.push("/menu");
        })
        .catch((err) => {
          console.error(err);
          this.alert = true;
        });
    },
  },
};
</script>

<template>
  <div id="login-container" class="">
    <v-card class="mx-auto" style="min-width: 300px" elevation="0">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-5 mt-10">
              <v-toolbar dark color="#6AA84F">
                <v-toolbar-title>Đăng nhập</v-toolbar-title>
              </v-toolbar>
              <v-alert
                :value="alert"
                dense
                outlined
                type="error"
                class="mt-3 mx-auto"
                width="80%"
              >
                Sai tên đăng nhập hoặc mật khẩu
              </v-alert>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="Email"
                    type="text"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex flex-column">
                <v-btn color="#6AA84F" class="mb-2 white--text" @click="onLogin"
                  >Đăng nhập</v-btn
                >
                Hoặc
                <v-divider></v-divider>
                <v-btn class="mt-2" @click="onGoogleLogin"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                    style="max-width: 24px"
                    class="mr-2"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlink:href="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clip-path="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clip-path="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    /></svg
                  >Google</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<style scoped>
#login-container {
  height: 100%;
}
</style>
