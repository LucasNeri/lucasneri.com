<template>
    <div>
        <HeaderAbout icon="mdi-account-school" :title="$t('education')" />
        <EducationText :text="$t('undergraduate')" />
        <EducationText :text="$t('bachelor')" />
        <EducationText :text="$t('english')" />
        <EducationText :text="$t('frontend')" />
        <EducationText :text="$t('fullstack')" />
        <EducationText :text="$t('highschool')" />
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