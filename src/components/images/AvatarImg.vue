<template>
  <div class="text-center mt-10 mb-5">
    <v-avatar>
      <img
        src="../../assets/profile-neri.jpg"
        alt="LN"
        :class="$vuetify.theme.dark ? 'profile-img-dark' : 'profile-img'"
      >
    </v-avatar>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'AvatarImg',
  });
</script>

<style scoped lang="sass">
  .v-avatar
    width: 160px !important
    height: 160px !important
    transition: width 2s, height 2s

  .profile-img
    border: 5px solid #FBD144
    padding: 5px
    transition: background 2s
    background-color: #FFF 

  .profile-img-dark
    @extend .profile-img
    border: 5px solid #FFE071
    background: none

  @media (max-width: 800px)
    .v-avatar
      width: 130px !important
      height: 130px !important
      transition: width 2s, height 2s
        
</style>