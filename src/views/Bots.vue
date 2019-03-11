<script lang="ts">
  import NewBot from "@/components/dialogs/NewBot.vue";

  export default {
    components: {NewBot},
    data: () => {
      return {
        loader: null,
        loading2: false,
        bots: [],
      };
    },
    created(): void {
      this.load();
    },
    methods: {
      async load() {
        this.bots = [];
        try {
          this.bots = (await this.$api.bots()).data;
        } catch (err) {
          this.$errorHandler.handle(err);
        }
      },
      createBot() {
        this.$refs.newBotDialog.show((status) => {
          if (status === "confirmed") {
            this.load();
          }
        });
      },
      async deleteBot(bot) {
        try {
          await this.$api.deleteBot(bot.id);
          await this.load();
        } catch (err) {
          this.$errorHandler.handle(err);
        }
      },
      async testBot(bot) {
        this.$router.push({name: "bot_test", params: {id: bot.id}});
      },
      async reload() {
        this.loading2 = true;
        await this.load();
        this.loading2 = false;
      }
    },
  }
</script>

<template>
    <v-container>
        <v-layout>
            <NewBot ref="newBotDialog"/>
            <v-flex xs2 sm2>
                <v-btn large block color="indigo darken-1" class="mx-0" outline @click="createBot">Добавить</v-btn>
                <v-btn large block color="success darken-1" class="mx-0" :loading="loading2" :disabled="loading2" outline @click="reload">
                    Обновить
                    <template v-slot:loader>
                        <span>Loading...</span>
                    </template>
                </v-btn>
            </v-flex>
            <v-divider class="mx-3" inset vertical></v-divider>
            <v-flex xs10 sm10>
                <h1 v-if="bots.length === 0">У вас нет ботов</h1>
                <v-card class="bot-card" xs4 sm4 v-for="item in bots">
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ item.name }}</h3>
                            <div>{{ item.description }}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange" @click="testBot(item)">Тестировать</v-btn>
                        <v-btn flat color="red" @click="deleteBot(item)">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="stylus" scoped>
    .bot-card {
        margin-bottom 12px
    }
</style>
