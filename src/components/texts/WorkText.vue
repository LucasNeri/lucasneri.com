<template>
    <div class="d-flex">
        <p :class="$vuetify.theme.dark ? 'about-number-dark' : 'about-number'">
            {{ numberText }}
        </p>
        <p :class="$vuetify.theme.dark ? 'about-text-dark' : 'about-text'">
            {{ text }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
    name: 'WorkText',
    props: {
        numberText: String,
        text: String,
    }
    });
</script>

<style scoped lang="sass">
    .about-number
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 800
        font-size: 19px
        line-height: 27px
        color: #3D3D3D
        flex: none
        order: 0
        flex-grow: 0
        text-align: left
        width: 100px
        margin-left: 25px
        margin-right: 25px
        transition: all 2s

    .about-number-dark
        @extend .about-number
        color: #FFE071
        font-weight: 500
        transition: all 2s

    .about-text
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 19px
        line-height: 27px
        color: #3D3D3D 
        text-align: left
        margin-bottom: 0px
        margin-right: 25px
        transition: all 2s

    .about-text-dark
        @extend .about-text
        color: #C3C7CB
        transition: all 2s

    @media (max-width: 800px)
        .about-text
            font-size: 16px
            line-height: 20px
        .about-text-dark
            font-size: 16px
            line-height: 20px
        .about-number
            font-size: 16px
            line-height: 20px
        .about-number-dark
            font-size: 16px
            line-height: 20px

</style>