<template>
    <div>
        <HeaderAbout icon="mdi-domain" title="Work History" />   
        <WorkText numberText="2022+" text="EstrelaBet"/>
        <WorkText numberText="2021-2022" text="SX company"/>
        <WorkText numberText="2020+" text="Freelance Developer"/>
        <WorkText numberText="2019-2020" text="Private Math Teacher"/>
        <WorkText numberText="2018-2019" text="Localiza Hertz"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import WorkText from '@/components/texts/WorkText.vue';
    import HeaderAbout from '@/components/groups/HeaderAbout.vue';

    export default Vue.extend({
    name: 'Work',
    components: { WorkText, HeaderAbout }
    });
</script>

<style scoped lang="sass">
</style>