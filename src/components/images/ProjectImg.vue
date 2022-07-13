<template>
  <a target="_blank" :href="hrefProps">
    <img :src="require(`../../assets/${srcProps}`)" class="project-img" :alt="altProps" />
  </a>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'ProjectImg',
    props: {
      classIcon: String,
      hrefProps: String,
      srcProps: String,
    }
  });
</script>

<style scoped lang="sass">
  .project-img
    width: 340px
    height: 170px
    margin: 15px 20px
    border-radius: 10px
    object-fit: cover
    transition: all 2s 

  @media (max-width: 380px)
    .project-img
      width: 250px
      height: 125px
      transition: all 2s 
        
</style>