<template>
    <p :class="$vuetify.theme.dark ? 'simple-text-dark' : 'simple-text'">
        Software Engineer
    </p>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
    name: 'ProfileText',
    });
</script>

<style scoped lang="sass">
    .simple-text
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 18px
        line-height: 28px
        text-align: center
        color: #575757
        transition: all 2s

    .simple-text-dark
        @extend .simple-text
        color: #A3ABB2

    @media (max-width: 800px)
        .simple-text
            font-size: 14px
            line-height: 21px

        .simple-text-dark
            font-size: 14px
            line-height: 21px
        
</style>