<script>
  export default {
    components: {},
    data: () => {
      return {
        tournaments: [],
      }
    },
    async created() {
      try {
        this.tournaments = (await this.$api.tournaments()).data;
      } catch (err) {
        this.$errorHandler.handle(err);
      }
    }
  }
</script>

<template>
    <v-container>
        <v-layout>
            <v-flex v-if="tournaments.length > 0">
                <v-card xs6 sm6 color="indigo darken-1" dark v-for="item in tournaments">
                    <v-img :src="item.image" :contain="false" max-height="200" aspect-ratio="3"></v-img>
                    <v-card-title class="title">{{ item.name }}</v-card-title>
                    <v-card-text class="white text--primary">
                        <p>{{ item.description }}</p>
                        <v-btn color="indigo darken-1" class="mx-0" outline>Принять участие</v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-else xs12 sm12>
                нет турниров
            </v-flex>
        </v-layout>
    </v-container>
</template>
