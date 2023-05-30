<template>
  <v-app>
    <v-main>
      <v-container fluid class="container-app">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify/lib'
import pt from './locales/pt';
import en from './locales/en';

new Vuetify({
  lang: {
    locales: { pt, en },
    current: 'en', // define o idioma padrão
  },
  theme: {
    themes: {
      light: {
        back_button_dark_mode: '#FFFFFF',
        icon_button_dark_mode: '#3D3D3D',
        strong_gray: '#575757',
        yellow: '#FBD144',
        btn: '#FFFFFF'
      },
      dark: {
        back_button_dark_mode: '#171F26',
        icon_button_dark_mode: '#A3ABB2',
        yellow: '#FFE071',
        btn: '#171F26'
      }
    },
  },
});

export default Vue.extend({
  name: 'App',
  computed: {
  },
  data: () => ({
  }),
  methods: {
  },
  watch: {
  },
});
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro')
@import url('https://fonts.googleapis.com/css?family=Poppins')

#app
  font-family: 'Roboto', sans-serif

.theme--light.v-application
  background-color: #E5E5E5
  transition: all 2s

.theme--dark.v-application
  background-color: #0C151D
  transition: all 2s

::-webkit-scrollbar-thumb 
  border-radius: 6px 
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3) 
  background-color: #B0B0B0 

::-webkit-scrollbar 
  width: 8px 
  background-color: #B0B0B0 

::-webkit-scrollbar-thumb 
  border-radius: 6px 
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3) 
  background-color: #727272 
    
</style>