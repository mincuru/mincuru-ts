<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        valiant="text"
        @click.stop="drawer.drawer = !drawer.drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>みんクル</v-app-bar-title>
      <v-btn> サインイン </v-btn>
      <v-btn>
        <v-icon> mdi-home </v-icon>
      </v-btn>
    </v-app-bar>

    <slot />

    <v-footer>here is the footer.</v-footer>
  </v-app>
</template>

<script setup lang="ts">
const drawer = useState<{ drawer: boolean }>('drawer', () => {
  return {
    drawer: false,
  };
});
</script>
