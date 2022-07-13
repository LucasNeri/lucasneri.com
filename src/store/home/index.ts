import { getField, updateField } from 'vuex-map-fields';
import { StateProps } from './types';

export default {
    namespaced: true,
    state: {
        portfolio: true,
        skills: false
    },
    mutations: {
        showPortfolio(state: StateProps) : void {
            if (!state.portfolio) {
                state.portfolio = true;
                state.skills = false;
            } else {
                state.portfolio = false;
            }
        },
        showSkills(state: StateProps) : void {
            if (!state.skills) {
                state.portfolio = false;
                state.skills = true;
            } else {
                state.skills = false;
            }
        },
        updateField,
    },
    getters: {
        getField,
    },
    actions: {
    }
}