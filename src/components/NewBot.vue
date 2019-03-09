<script>
  export default {
    data: () => {
      return {
        visible: false,
        form: {
          name: "",
          address: "",
        },
      };
    },
    computed: {
      formValid() {
        return this.form.name.length > 0 && this.form.address.length > 0;
      }
    },
    methods: {
      show() {
        this.visible = true;
      },
      async onSubmit() {
        try {
          const res = (await this.$api.createBot(this.form.name)).data;
          this.visible = false;
        } catch (e) {
          alert(e.message);
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
                                <v-text-field label="Имя" v-model.trim="form.name" required></v-text-field>
                                <v-text-field label="Адрес" v-model.trim="form.address" required></v-text-field>
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
