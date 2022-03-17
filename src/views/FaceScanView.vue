<template>
  <div class="teal fill-height">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
        <ErrorCard :error="error"></ErrorCard>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import ErrorCard from "@/components/ErrorCard";
export default {
  components: {
    ErrorCard,
  },
  data() {
    return {
      dialog: true,
      error: {
        icon: "mdi-domain",
        mess: "Error",
        detail: "Details of Error",
        buttonText: "Thu lai",
      },
    };
  },
};
</script>
