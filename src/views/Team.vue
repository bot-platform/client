<script>
  export default {
    data: () => {
      return {
        items: [
          {title: 'Боты', icon: 'dashboard', route: "bots"},
          {title: 'About', icon: 'question_answer', route: "bots"}
        ],
        right: null,
      }
    },
  }
</script>

<template>
    <v-card class="pa-5" color="indigo" flat>
        <v-card class="d-inline-block elevation-12">
            <v-navigation-drawer floating permanent stateless value="true">
                <v-list dense>
                    <v-list-tile v-for="item in items" :key="item.title" @click="route.push({name: item.route})">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </v-card>
        <router-view></router-view>
    </v-card>
</template>

<style scoped>

</style>