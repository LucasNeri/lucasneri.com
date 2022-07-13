<template>
    <div class="text-center mt-15 mb-6">
        <v-icon 
            :class="$vuetify.theme.dark ? 'about-icon-dark' : 'about-icon'" 
            :color="$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.yellow : this.$vuetify.theme.themes.light.strong_gray"
        >
            {{ icon }}
        </v-icon>
        <p :class="$vuetify.theme.dark ? 'about-title-dark' : 'about-title'">
            {{ title }}
        </p>
        <v-divider :class="$vuetify.theme.dark ? 'divider-dark mx-auto': 'divider mx-auto'"></v-divider>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
    name: 'About',
    props: {
        icon: String,
        title: String
    },
    });
</script>

<style scoped lang="sass">
    .mdi:before
        font-size: 28px
        transition: all 2s

    .about-icon
        justify-content: center
        align-items: center
        width: 60px
        height: 60px
        border-radius: 108px
        border: 6px solid #FBD144 
        padding: 5px
        margin-top: 10px 
        transition: all 2s

    .about-icon-dark
        @extend .about-icon
        border: 6px solid #2f3e4d

    .about-title
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 26px
        line-height: 30px
        color: #3D3D3D
        flex: none
        order: 0
        flex-grow: 0
        margin-bottom: 3px
        margin-top: 14px
        text-align: center
        transition: all 2s

    .about-title-dark
        @extend .about-title
        color: #C3C7CB

    .divider
        max-width: 120px
        max-height: 10px
        height: 7px
        background: #FBD144
        margin-top: 14px
        margin-bottom: 30px
        border-radius: 10px
        transition: all 2s

    .divider-dark
        @extend .divider
        background: #2f3e4d

    @media (max-width: 800px)
        .mdi:before
            font-size: inherit

        .about-icon
            width: 50px
            height: 50px
            border: 4px solid #FBD144 
            margin-top: 0

        .about-icon-dark
            border: 4px solid #2f3e4d

        .divider
            max-width: 100px
            max-height: 7px

        .about-title
            font-size: 20px
            line-height: 24px 

</style>