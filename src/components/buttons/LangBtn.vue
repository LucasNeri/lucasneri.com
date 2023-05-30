<template>
  <div class="text-center my-10">
    <v-menu offset-y transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          dark
          small
          style="margin-right: 15px"
          v-on="on"
          v-bind="attrs"
          :color="color"
        >
          <v-icon :color="iconColor" small> mdi-translate </v-icon>
        </v-btn>
      </template>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" :color="translateColor">
          <v-list-item :key="1" value="en">
            <v-list-item-content>
              <v-list-item-title> English </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :key="2" value="pt">
            <v-list-item-content>
              <v-list-item-title> Português </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LangBtn",
  data: () => ({
    selectedItem: 'en',
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  computed: {
    iconColor() {
      return this.$vuetify.theme.dark === true
        ? this.$vuetify.theme.themes.dark.icon_button_dark_mode
        : this.$vuetify.theme.themes.light.icon_button_dark_mode;
    },
    color() {
      return this.$vuetify.theme.dark === true
        ? this.$vuetify.theme.themes.dark.back_button_dark_mode
        : this.$vuetify.theme.themes.light.back_button_dark_mode;
    },
    translateColor() {
      return this.$vuetify.theme.dark === true
        ? '#fedf71'
        : '#505050';
    },
  },
  watch: {
    selectedItem(val) {
        this.$i18n.locale = val;
    },
  },
});
</script>

<style scoped lang="sass"></style>
