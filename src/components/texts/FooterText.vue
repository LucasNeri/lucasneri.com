<template>
    <div :class="classDivProps">
        <p :class="$vuetify.theme.dark ? 'footer-text-dark' : 'footer-text'">
            {{ text }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
    name: 'FooterText',
    props: {
        classDivProps: String,
        text: String,
    }
    });
</script>

<style scoped lang="sass">
    .footer-text
        font-family: 'Poppins', sans-serif
        font-style: normal
        font-weight: 500
        font-size: 20px
        line-height: 28px
        color: #575757
        flex: none
        order: 0
        flex-grow: 0
        margin-bottom: 3px
        text-align: center
        transition: all 2s

    .footer-text-dark
        @extend .footer-text
        color: #C3C7CB

    @media (max-width: 800px)
        .footer-text
            font-size: 16px
            line-height: 24px

        .footer-text-dark
            font-size: 16px
            line-height: 24px
        
</style>