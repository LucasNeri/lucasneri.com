<template>
    <p :class="$vuetify.theme.dark ? 'simple-title-dark' : 'simple-title'">
        Lucas Neri
    </p>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
    name: 'ProfileTitle',
    });
</script>

<style scoped lang="sass">
    .simple-title 
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 42px
        line-height: 60px
        text-align: center
        color: #3D3D3D
        margin-bottom: 5px
        transition: all 2s

    .simple-title-dark 
        @extend .simple-title 
        color: #F1F2F4
        
    @media (max-width: 800px)
        .simple-title
            font-size: 32px
            line-height: 48px

        .simple-title-dark 
            font-size: 32px
            line-height: 48px

</style>