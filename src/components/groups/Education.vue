<template>
    <div>
        <HeaderAbout icon="mdi-account-school" title="Education" />
        <EducationText text="Rocketseat - FrontEnd Developer Course (2021)" />
        <EducationText text="Curso de JS e TS - Udemy, Web Development Course (2020)" />
        <EducationText text="Aliança America - English School (2021+)" />
        <EducationText text="Matemática - University of MG, Brasil (2019+)" />
        <EducationText text="Colégio Tiradentes Da PMMG - High School (2017)" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderAbout from '@/components/groups/HeaderAbout.vue';
import EducationText from '../texts/EducationText.vue';

export default Vue.extend({
    name: 'Education',
    components: { HeaderAbout, EducationText }
});
</script>

<style scoped lang="sass">
</style>