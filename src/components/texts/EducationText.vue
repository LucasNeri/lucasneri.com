<template>
    <div class="education">
        <v-icon :color="$vuetify.theme.dark ? '#FFE071' : '#3D3D3D'" class="about-text-icon">
            mdi-account-school
        </v-icon>
        <p :class="$vuetify.theme.dark ? 'about-text-dark' : 'about-text'">
            {{ text }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
    name: 'EducationText',
    props: {
        text: String,
    }
    });
</script>

<style scoped lang="sass">
    .mdi:before
        font-size: 30px
        line-height: 35px

    .v-icon
        transition: all 2s

    .education
        align-items: center
        display: flex
        margin: 16px 0

    .about-text-icon
        margin-left: 25px
        margin-right: 10px 
    
    .about-text
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 19px
        line-height: 23px
        color: #3D3D3D 
        text-align: left
        margin-bottom: 0px
        margin-right: 25px

    .about-text-dark
        @extend .about-text
        color: #C3C7CB
        transition: all 2s

    @media (max-width: 800px)
        .mdi:before
            font-size: inherit
            line-height: 23px

        .about-text
            font-size: 16px
            line-height: 21px

</style>