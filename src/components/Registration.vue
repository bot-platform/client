<script>
  export default {
    name: "Registration",
    data: () => {
      return {
        visible: false,
        form: {
          name: "",
        },
      };
    },
    computed: {
      formValid() {
        return this.form.name.length > 0;
      }
    },
    methods: {
      show() {
        this.visible = true;
      },
      onSubmit() {
        this.$api.createCommand(this.form.name).then((res) => {
          console.log(res);
          this.visible = false;
        }).catch(err => {
          alert('error');
        });
      },
    },
  }
</script>

<template>
    <v-dialog v-model="visible" max-width="600px">
        <form @submit.prevent="onSubmit">
            <v-card>
                <v-card-title>
                    <span class="headline">Новая команда</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md12>
                                <v-text-field label="Имя" v-model.trim="form.name" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="visible = false">Отменить</v-btn>
                    <v-btn type="submit" :disabled="!formValid" color="blue darken-1" flat>Применить</v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </v-dialog>
</template>

<style scoped>

</style>
