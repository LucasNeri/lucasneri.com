<template>
    <div class="button-group">
      <v-btn-toggle
        tile
        color="#0C151D"
        group
        v-model="toggleSelect"
      >
        <v-btn 
          large 
          @click="showPortfolio()" 
          value="portfolioValue"
        >
          <span :class="$vuetify.theme.dark ? 'text-btn-t-dark' : 'text-btn-t'">Portfolio</span>
        </v-btn>
  
        <v-btn 
          large 
          @click="showSkills()" 
          value="skillsValue"
        >
          <span :class="$vuetify.theme.dark ? 'text-btn-t-dark' : 'text-btn-t'">About</span>
        </v-btn>
      </v-btn-toggle>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {mapMutations} from 'vuex';

    export default Vue.extend({
        name: "ButtonTogle",
        data: () => ({
            toggleSelect: "portfolioValue",
        }),
        methods: {
            ...mapMutations("home", [
                "showPortfolio",
                "showSkills"
            ]),
        },
    });
</script>

<style scoped lang="sass">
    .text-btn-t
        color: #19191B
        transition: all 2s
        font-size: 18px
    
    .text-btn-t-dark
        @extend .text-btn-t
        color: #A3ABB2

    .button-group 
        display: flex
        justify-content: center
        align-items: center
        margin-top: 70px 
        margin-bottom: 35px

    .theme--light.v-btn-toggle 
        background-color: #FFFFFF
        transition: all 2s
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)

    .v-btn-toggle .v-btn
        width: 154px
        border-radius: 20px
        border-top-right-radius: inherit
        border-bottom-right-radius: inherit
        border-left: inherit
        border-top-left-radius: inherit
        border-bottom-left-radius: inherit

    .v-application--is-ltr .v-btn-toggle > .v-btn--active
        background: #0C151D !important
        transition: all 2s

    .v-application--is-ltr .theme--light.v-btn-toggle > .v-btn--active
        background: #D7D7D7 !important
        transition: all 2s

    .v-application--is-ltr .v-btn-toggle > .v-btn
        margin: 0  
        width: 330px
        height: 70px
        border-radius: 20px
        border-top-right-radius: inherit !important
        border-bottom-right-radius: inherit !important
        border-left: inherit
        border-top-left-radius: inherit !important
        border-bottom-left-radius: inherit !important
        transition: all 2s

    .v-btn-toggle
        width: 715px
        height: 100px
        background-color: #171F26
        border-radius: 10px
        align-items: center
        justify-content: center
        gap: 9px
        transition: all 2s
        margin-bottom: 30px

    @media (max-width: 800px)
        .v-application--is-ltr .v-btn-toggle > .v-btn
            margin: 0  
            width: 154px
            height: 44px

        .v-btn-toggle
            width: 330px
            height: 64px
            margin-bottom: 0px

        .text-btn-t
            font-size: 14px
        
        .text-btn-t-dark
            font-size: 14px

    @media (max-width: 360px)
        .v-btn-toggle .v-btn
            max-width: 40vw


</style>