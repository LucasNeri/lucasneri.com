<template>
    <div :class="classDivProps">
        <div v-if="about">            
            <p :class="$vuetify.theme.dark ? 'footer-text-dark' : 'footer-text'">
                {{ text }}
            </p>
            <br>
            <p :class="$vuetify.theme.dark ? 'footer-text-dark' : 'footer-text'">
                {{ text2 }}
            </p>
            <br>
            <p :class="$vuetify.theme.dark ? 'footer-text-dark' : 'footer-text'">
                {{ text3 }}
            </p>
        </div>
        <p :class="$vuetify.theme.dark ? 'footer-text-dark' : 'footer-text'" v-else>
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
        text2: String,
        text3: String,
        about: Boolean,
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