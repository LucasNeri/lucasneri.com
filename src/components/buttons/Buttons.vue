<template>
    <div class="buttons">
        <v-btn
            class="button"
            :color="$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.yellow : this.$vuetify.theme.themes.light.yellow"
            large
            light
            target="_blank"
            href="CV_LucasNeri.pdf"
            download
        > 
            Dowload CV&nbsp;<v-icon>mdi-tray-arrow-down</v-icon>
        </v-btn>
        <v-btn
            class="button"
            :color="$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.btn : this.$vuetify.theme.themes.light.btn"
            large
            light
            target="_blank"
            href="https://wa.me/message/KZQKH2ALTZI7N1"
        > 
            <span :class="$vuetify.theme.dark ? 'text-btn-dark' : 'text-btn'">
            Contact me
            </span>
        </v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Buttons",
    });
</script>

    <style scoped lang="sass">
    .text-btn
        color: #3D3D3D
        transition: all 2s
    
    .text-btn-dark
        @extend .text-btn
        color: #A3ABB2

    .buttons
        display: flex
        justify-content: center
        align-items: center
        margin-top: 40px

    .button
        margin: 0 10px
        width: 280px
        height: 55px !important
        border-radius: 10px
        transition: all 2s

    @media (max-width: 800px)
        .button
            margin: 0 10px
            width: 158px
            height: 44px

    @media (max-width: 380px)
        .button
            width: 145px
            height: 38px !important
            margin: 0 5px

    @media (max-width: 360px)
        .button
            width: 135px
            margin: 0 5px

</style>