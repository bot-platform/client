<script>
  export default {
    data: () => {
      return {
        visible: false,
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      }
    },
  }
</script>

<template>
    <v-layout row justify-center>
        <v-dialog v-model="visible" persistent fullscreen content-class="loading-dialog">
            <v-container fill-height>
                <v-layout row justify-center align-center>
                    <v-progress-circular indeterminate :size="100" :width="10" color="primary"></v-progress-circular>
                </v-layout>
            </v-container>
        </v-dialog>
    </v-layout>
</template>

<style lang="stylus">
    .loading-dialog {
        background-color rgba(0, 0, 0, 0.5)
    }
</style>
