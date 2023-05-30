<template>
  <v-main class="about">
    <FooterText
      classDivProps="mt-8 px-5"
      :text="$t('textAbout')"
      :text2="$t('textAbout2')"
      :text3="$t('textAbout3')"
      about
    />
    <Work />
    <Education />
    <Skills />
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import FooterText from "@/components/texts/FooterText.vue";
import Work from "./Work.vue";
import Education from "./Education.vue";
import Skills from "./Skills.vue";

export default Vue.extend({
  name: "About",
  props: {},
  components: { FooterText, Work, Education, Skills },
});
</script>

<style scoped lang="sass">
.about
  max-width: 700px
  justify-content: center
  align-items: center
  margin: 0 auto

@media (max-width: 800px)
  .about
    max-width: 400px
    justify-content: center
    align-items: center
    margin: 0 auto
</style>
