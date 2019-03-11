<script>
  export default {
    data: () => {
      return {
        visible: false,
        form: {
          name: "",
          address: "",
        },
        callback: (status) => false,
      };
    },
    computed: {
      formValid() {
        return this.form.name.length > 0 && this.form.address.length > 0;
      }
    },
    methods: {
      show(callback) {
        this.callback = callback;
        this.visible = true;
      },
      async onSubmit() {
        try {
          const res = (await this.$api.addBot(this.form.name, this.form.address)).data;
          this.visible = false;
          this.callback("confirmed");
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
                    <span class="headline">Добавить бота</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md12>
                                <v-text-field label="Имя" v-model.trim="form.name" required persistent-hint outline></v-text-field>
                                <v-text-field label="Адрес" v-model.trim="form.address" required persistent-hint outline hint="http://localhost:18000/hook"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat @click="visible = false">Отменить</v-btn>
                    <v-btn type="submit" :disabled="!formValid" color="green darken-1" flat>Подтвердить</v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </v-dialog>
</template>

<style scoped>

</style>
