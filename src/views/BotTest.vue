<script lang="ts">
  import Game from "@/game"

  export default {
    async created(): void {
      this.initWebSockets();
      try {
        const res = (await this.$api.testBot(this.$route.params.id)).data;
      } catch (err) {
        this.$errorHandler.handle(err);
      }
    },
    mounted(): void {
      const game = new Game(this.$refs.game);
      game.run();
    },
    destroyed() {
      this.$ws.disconnect();
    },
    methods: {
      initWebSockets(): void {
        this.$ws.connect();
        this.$ws.opened(() => {
          this.$ws.emit("ping");
        });
      }
    },
  }
</script>

<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="game" ref="game"></div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>
