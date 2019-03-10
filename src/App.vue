<script>
  import Toolbar from "@/components/core/Toolbar.vue"
  import Notification from "@/components/Notification.vue"
  import Loader from "@/components/Loader.vue"
  import auth from "@/utils/auth.ts"

  export default {
    components: {Toolbar, Notification, Loader},
    data: () => {
      return {}
    },
    created() {
      this.$eventBus.$on("unauthorized", () => {
        auth.setToken("");
        this.$refs.notification.show("вы не авторизованы");
        this.$router.push({name: "home"});
      });
      this.$eventBus.$on("error", (error) => {
        this.$refs.notification.show(error);
      });
      this.$eventBus.$on("authorized", (token) => {
        auth.setToken(token);
        this.$refs.notification.show("вы авторизованы");
      });
    },
    mounted() {
      this.$refs.loader.show();
      setTimeout(() => {
        this.$refs.loader.hide();
      }, 500);
    }
  }
</script>

<template>
    <v-app>
        <Notification ref="notification"/>
        <Toolbar/>
        <v-content>
            <router-view/>
        </v-content>
        <Loader ref="loader"/>
    </v-app>
</template>
