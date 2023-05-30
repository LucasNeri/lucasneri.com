<template>
    <div>
        <HeaderAbout icon="mdi-domain" :title="$t('workHistory')" />   
        <WorkText numberText="2022+" text="EstrelaBet"/>
        <WorkText numberText="2021-2022" text="SX company"/>
        <WorkText numberText="2020-2021" :text="$t('freelance')"/>
        <WorkText numberText="2019-2020" :text="$t('privateTeacher')"/>
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