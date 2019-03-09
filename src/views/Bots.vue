<script lang="ts">
  import NewBot from "@/components/NewBot.vue";

  export default {
    components: {NewBot},
    data: () => {
      return {
        bots: [],
      };
    },
    async created(): void {
      try {
        this.bots = (await this.$api.bots()).data;
      } catch (e) {
        this.$eventBus.$emit("error", e.message);
      }
    },
    methods: {
      createBot() {
        this.$refs.newBotDialog.show();
      },
    },
  }
</script>

<template>
    <v-container>
        <v-layout>
            <NewBot ref="newBotDialog"/>
            <v-flex xs12 sm12>
                <h1 v-if="bots.length === 0">У вас нет ботов</h1>
                <v-btn large color="primary" @click="createBot">Добавить</v-btn>
                <v-flex xs6 sm6>
                    <v-card v-for="item in bots">
                        <v-img :src="item.image" :contain="true"></v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ item.name }}</h3>
                                <div>{{ item.description }}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn flat color="orange">Подробнее</v-btn>
                            <v-btn flat color="orange">Участвовать</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>
