<template>
    <div class="mt-16">
        <HeaderAbout icon="mdi-star" title="Main Skills" />
        <div class="text-center">
            <div class="skills-icon">
                <SkillIcon srcProps="javascript.png" altProps="JS" />
                <SkillIcon srcProps="typescript.png" altProps="TS" />
                <SkillIcon srcProps="golang.png" altProps="GO" />
                <SkillIcon srcProps="python.png" altProps="PY" />
            </div>
            <div class="skills-icon">
                <SkillIcon srcProps="vue-js.png" altProps="Vue" />
                <SkillIcon srcProps="react-native.png" altProps="RS" />
                <SkillIcon srcProps="nodejs.png" altProps="NODE" />
                <SkillIcon srcProps="html.png" altProps="HTML" />
            </div>
            <div class="skills-icon">
                <SkillIcon srcProps="css.png" altProps="CSS" />
                <SkillIcon srcProps="mysql.png" altProps="MYSQL" />
                <SkillIcon srcProps="mongodb.png" altProps="MONGO" />
                <SkillIcon srcProps="docker.png" altProps="DOCKER" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderAbout from '@/components/groups/HeaderAbout.vue';
import SkillIcon from '../icons/SkillIcon.vue';

export default Vue.extend({
    name: 'Skills',
    components: { HeaderAbout, SkillIcon }
});
</script>

<style scoped lang="sass">
    .skills-icon
        margin: 35px 10px
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap
        transition: all 2s

    @media (max-width: 800px)
        .skills-icon
            margin: 25px 10px

</style>