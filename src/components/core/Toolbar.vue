<script>
  import Registration from "@/components/Registration"

  export default {
    components: {Registration},
    data: () => {
      return {};
    },
    methods: {
      showRegistrationDialog() {
        this.$refs.registrationDialog.show();
      }
    },
  }
</script>

<template>
    <v-toolbar app flat>
        <Registration ref="registrationDialog"/>
        <v-toolbar-side-icon class="hidden-md-and-up"/>
        <v-container mx-auto py-0>
            <v-layout>
                <v-img
                        :src="require('@/assets/logo.png')"
                        class="mr-5"
                        contain
                        height="48"
                        width="48"
                        max-width="48"
                        @click="$vuetify.goTo(0)"
                />
                <v-btn :to="{name: 'home'}" class="ml-0 hidden-sm-and-down" flat>Турнир</v-btn>
                <v-btn :to="{name: 'team'}" class="ml-0 hidden-sm-and-down" flat>Команда</v-btn>
                <v-btn :to="{name: 'bots'}" class="ml-0 hidden-sm-and-down" flat>Боты</v-btn>
                <v-btn @click="showRegistrationDialog()" class="ml-0 hidden-sm-and-down" flat>Регистрация</v-btn>
                <v-spacer/>
            </v-layout>
        </v-container>
    </v-toolbar>
</template>

<style scoped>

</style>
