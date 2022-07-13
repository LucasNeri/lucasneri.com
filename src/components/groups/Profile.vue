<template>
    <div class="text-center mb-10">      
        <AvatarImg />
        <ProfileTitle />
        <ProfileText />
        <div class="icons">
            <LinkIcon 
                classIcon="icon-git"
                hrefProps="https://github.com/LucasNeri"
                srcProps="github.png"
            />
            <LinkIcon 
                classIcon="icon"
                hrefProps="https://www.instagram.com/lucas_ner1/"
                srcProps="insta.png"
            />
            <LinkIcon 
                classIcon="icon"
                hrefProps="https://www.linkedin.com/in/lucasneri99/"
                srcProps="linkedin.png"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import AvatarImg from '@/components/images/AvatarImg.vue';
    import ProfileTitle from '../texts/ProfileTitle.vue';
    import ProfileText from '../texts/ProfileText.vue';
    import LinkIcon from '../icons/LinkIcon.vue';

    export default Vue.extend({
        name: 'Profile',
        components: { AvatarImg, ProfileTitle, ProfileText, LinkIcon }
    });

</script>

<style scoped lang="sass">
    .icons
        display: flex
        justify-content: center
        align-items: center

</style>