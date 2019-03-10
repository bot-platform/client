<script>
  export default {
    data: () => {
      return {
        visible: false,
        form: {
          login: "",
          password: "",
        },
      };
    },
    computed: {
      formValid() {
        return this.form.login.length > 0 && this.form.password.length > 0;
      }
    },
    methods: {
      show() {
        this.visible = true;
      },
      async onSubmit() {
        try {
          const res = (await this.$api.login(this.form.login, this.form.password)).data;
          this.$eventBus.$emit("authorized", res.token);
          this.visible = false;
        } catch (err) {
          this.$errorHandler.handle(err);
        }
      },
    },
  }
</script>

<template>
    <v-dialog v-model="visible" max-width="600px">
        <form @submit.prevent="onSubmit">
            <v-card>
                <v-card-title>
                    <span class="headline">Аутенфикация</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md12>
                                <v-text-field label="Логин" v-model.trim="form.login" required></v-text-field>
                                <v-text-field label="Пароль" v-model.trim="form.password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="visible = false">Отменить</v-btn>
                    <v-btn type="submit" :disabled="!formValid" color="blue darken-1" flat>Подтвердить</v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </v-dialog>
</template>

<style scoped>

</style>
