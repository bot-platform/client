<script lang="ts">
  export default {
    props: ["tooltip"],
  }
</script>

<template>
    <v-tooltip top>
        <template v-slot:activator="{ on }">
            <v-btn outline color="indigo darken-1" dark v-on="on">
                <slot></slot>
            </v-btn>
        </template>
        <span>{{ tooltip }}</span>
    </v-tooltip>
</template>

<style scoped>

</style>
