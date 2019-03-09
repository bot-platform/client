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
      } catch (e) {
        alert(e);
      }
    }
  }
</script>

<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm12>
                <v-card v-for="item in tournaments">
                    <v-img :src="item.image" :contain="true" aspect-ratio="2"></v-img>
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
        </v-layout>
    </v-container>
</template>
