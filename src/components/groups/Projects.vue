<template>
    <div class="projects">
        <div class="conditional-projects">
            <ProjectImg 
                hrefProps="https://www.sxgrupo.com.br/"
                srcProps="sx&co.png"
                altProps="sx&co"
            />
            <ProjectImg 
                hrefProps="https://starshorizon.com.br/"
                srcProps="stars-horizon.png"
                altProps="stars-horizon"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
import ProjectImg from '../images/ProjectImg.vue';

    export default Vue.extend({
    name: "Projects",
    components: { ProjectImg }
});
</script>

<style scoped lang="sass">
    .projects
        display: grid
        transition: all 2s

    .conditional-projects
        display: flex
        text-align: center
        margin: 0 auto

    @media (max-width: 800px)
        .conditional-projects
            display: grid
            transition: all 2s
        
</style>