<script>
  import Toolbar from "@/components/core/Toolbar.vue"

  export default {
    components: {Toolbar},
    data: () => {
      return {
        snackbar: false,
        text: "",
      }
    },
    created() {
      this.$eventBus.$on("error", (error) => {
        this.text = error;
        this.snackbar = true;
      })
    }
  }
</script>

<template>
    <v-app>
        <Toolbar/>
        <v-content>
            <router-view/>
        </v-content>
        <v-snackbar v-model="snackbar" color="error" :timeout="5000">
            {{ text }}
            <v-btn dark flat @click="snackbar = false">закрыть</v-btn>
        </v-snackbar>
    </v-app>
</template>
