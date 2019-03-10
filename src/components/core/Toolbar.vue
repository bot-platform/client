<script>
  import RegisterDialog from "@/components/dialogs/Register"
  import LoginDialog from "@/components/dialogs/Login"
  import auth from "@/utils/auth"

  export default {
    components: {RegisterDialog, LoginDialog},
    data: () => {
      return {};
    },
    computed: {
      isAuthorized() {
        return auth.isAuthorized();
      }
    },
    methods: {
      showRegistrationDialog() {
        this.$refs.registrationDialog.show();
      },
      showLoginDialog() {
        this.$refs.loginDialog.show();
      },
    },
  }
</script>

<template>
    <v-toolbar app flat>
        <RegisterDialog ref="registrationDialog"/>
        <LoginDialog ref="loginDialog"/>
        <v-toolbar-side-icon class="hidden-md-and-up"/>
        <v-container mx-auto py-0>
            <v-layout>
                <v-img :src="require('@/assets/logo.png')" class="mr-5" contain height="48" width="48" max-width="48"/>
                <v-btn :to="{name: 'home'}" class="ml-0 hidden-sm-and-down" flat>Турнир</v-btn>
                <v-btn :to="{name: 'bots'}" class="ml-0 hidden-sm-and-down" flat v-if="isAuthorized">Боты</v-btn>
                <v-spacer/>
                <template v-if="!isAuthorized">
                    <v-btn @click="showLoginDialog()" class="ml-0 hidden-sm-and-down" flat>Вход</v-btn>
                    <v-btn @click="showRegistrationDialog()" class="ml-0 hidden-sm-and-down" flat>Регистрация</v-btn>
                </template>
            </v-layout>
        </v-container>
    </v-toolbar>
</template>

<style scoped>

</style>
