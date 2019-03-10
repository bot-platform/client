<script>
  export default {
    data: () => {
      return {
        timeout: 3000,
        visible: false,
        text: "",
      };
    },
    methods: {
      show(text) {
        this.text = text;
        this.visible = true;
      },
      close() {
        this.visible = false;
      }
    },
  }
</script>

<template>
    <v-snackbar v-model="visible" color="error" :timeout="timeout">
        {{ text }}
        <v-btn dark flat @click="close">закрыть</v-btn>
    </v-snackbar>
</template>

<style scoped>

</style>
