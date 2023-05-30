<template>
  <div>
    <div style='display: flex; justify-content: center;' >
      <LangBtn />
      <DarkModeBtn />
    </div>
    <Profile />
    <Facts />
    <Buttons />
    <ButtonTogle />
    <transition name="fade" mode="out-in">
      <Projects v-if="portfolio"/>
      <About v-else/>
    </transition>
    <FooterText classDivProps="mt-15 mx-auto mb-5" :text="$t('rights')"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState, mapMutations} from 'vuex';
import DarkModeBtn from '@/components/buttons/DarkModeBtn.vue';
import LangBtn from '@/components/buttons/LangBtn.vue';
import Profile from '@/components/groups/Profile.vue';
import Facts from '@/components/groups/Facts.vue';
import Buttons from '@/components/buttons/Buttons.vue';
import ButtonTogle from '@/components/buttons/ButtonTogle.vue';
import Projects from '@/components/groups/Projects.vue';
import FooterText from '@/components/texts/FooterText.vue';
import About from '@/components/groups/About.vue';

export default Vue.extend({
    name: "Home",
    data: () => ({
        toggleSelect: "portfolioValue",
    }),
    computed: {
        ...mapState("home", [
            "portfolio",
            "skills"
        ]),
    },
    methods: {
        ...mapMutations("home", [
            "showPortfolio",
            "showSkills"
        ]),
    },
    components: { DarkModeBtn, LangBtn, Profile, Facts, Buttons, ButtonTogle, Projects, FooterText, About }
});
</script>

<style scoped lang="sass">
  .fade-enter-active, .fade-leave-active
    transition: all 0.5s ease-in-out

  .fade-enter, .fade-leave-to
    opacity: 0
    
</style>
