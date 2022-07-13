<template>
    <div :class="$vuetify.theme.dark ? 'box-icon-dark' : 'box-icon'">
        <img class="skill-icon" :src="require(`../../assets/${srcProps}`)" :alt="altProps" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SkilIcon',
    props: {
        srcProps: String,
        altProps: String
    }
});
</script>

<style scoped lang="sass">
    .skill-icon
        width: 70px
        height: 70px
        transition: all 2s

    .box-icon-dark
        width: 80px
        height: 80px
        background-color: #F1F2F4
        border-radius: 10px
        margin: 0 auto
        display: flex
        justify-content: center
        align-items: center
        box-sizing: border-box
        transition: all 2s

    .box-icon
        @extend .box-icon-dark
        background-color: #FFFFFF
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1) 

    @media (max-width: 800px)
        .skill-icon
            width: 50px
            height: 50px

        .box-icon-dark
            width: 60px
            height: 60px

</style>