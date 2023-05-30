<template>
    <div class="facts">
        <FactText 
            numberProps="2+"
            :textProps="$t('years')"
        />
        <FactText 
            numberProps="10+"
            :textProps="$t('projects')"
        />
        <FactText 
            numberProps="2"
            :textProps="$t('openSource')"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import FactText from '@/components/texts/FactText.vue';

    export default Vue.extend({
        name: 'Facts',
        components: { FactText }
    });

</script>

<style scoped lang="sass">
    .facts
        display: flex
        flex-direction: row
        align-items: center
        padding: 0px
        gap: 12px
        max-width: 570px
        min-height: 106px
        flex: none
        order: 2
        flex-grow: 0
        margin: 0 auto
        justify-content: center

    @media (max-width: 800px)
        .facts
            max-width: 375px


    @media (max-width: 360px)
        .facts
            display: grid

</style>