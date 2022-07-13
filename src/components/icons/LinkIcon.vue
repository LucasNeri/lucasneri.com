<template>
    <a target="_blank" :href="hrefProps">
        <img :src="require(`../../assets/${srcProps}`)" :class="$vuetify.theme.dark ? classIcon + '-dark' : classIcon"/>
    </a>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'LinkIcon',
        props: {
            classIcon: String,
            hrefProps: String,
            srcProps: String,
        }
    });
</script>

<style scoped lang="sass">
    .icon 
        margin: 0 12px
        filter: invert(25%)
        transition: all
        width: 25px
        height: 25px

    .icon-dark 
        @extend .icon 
        filter: invert(60%)
        transition: all 2s

    .icon-git
        margin: 0 9px
        filter: invert(25%)
        width: 30px
        height: 30px
        transition: all 2s

    .icon-git-dark
        @extend .icon-git
        filter: invert(60%)
        width: 30px
        height: 30px
        transition: all 2s

    @media (max-width: 800px)
        .icon
            width: 20px
            height: 20px
            transition: all 2s

        .icon-git
            width: 25px
            height: 25px
            transition: all 2s

        .icon-dark
            width: 20px
            height: 20px
            transition: all 2s
        
        .icon-git-dark
            width: 25px
            height: 25px
            transition: all 2s

</style>