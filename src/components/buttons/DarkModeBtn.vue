<template>
    <div class="text-center my-10">
        <v-btn
            fab
            dark
            small
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            :color="$vuetify.theme.dark ? $vuetify.theme.themes.dark.back_button_dark_mode : $vuetify.theme.themes.light.back_button_dark_mode"
        >
            <v-icon :color="$vuetify.theme.dark ? $vuetify.theme.themes.dark.icon_button_dark_mode : $vuetify.theme.themes.light.icon_button_dark_mode" small
            >
                mdi-brightness-4
            </v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
    name: 'DarkModeBtn',
    });
</script>

<style scoped lang="sass">
</style>