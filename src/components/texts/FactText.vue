<template>
    <div class="fact">
        <p :class="$vuetify.theme.dark ? 'fact-number-dark' : 'fact-number'"> {{ numberProps }} </p>
        <p :class="$vuetify.theme.dark ? 'fact-text' : 'fact-text-dark'">
            {{ textProps }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
    name: 'FactText',
    props: {
        textProps: String,
        numberProps: String,
    }
    });
</script>

<style scoped lang="sass">
    .fact
        text-align: center
        display: grid

    .fact-number
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 19px
        line-height: 24px
        color: #3A3A3A
        flex: none
        order: 0
        flex-grow: 0
        margin-bottom: 3px
        transition: color 2s

    .fact-number-dark
        @extend .fact-number
        color: #C3C7CB

    .fact-text
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 19px
        line-height: 24px
        color: #C3C7CB
        flex: none
        order: 0
        flex-grow: 0
        margin-bottom: 3px
        transition: color 2s

    .fact-text-dark
        @extend .fact-text
        color: #575757

    @media (max-width: 800px)
        .fact-number
            font-size: 16px

        .fact-number-dark
            font-size: 16px

        .fact-text
            font-size: 16px
            
        .fact-text-dark
            font-size: 16px
            
</style>