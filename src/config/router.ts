import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Routes from './routes';

declare global {
    interface Window {
        // eslint-disable-next-line
        popStateDetected : any;
    }
}

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes: Routes });

window.popStateDetected = false
window.addEventListener('popstate', () => {
    // eslint-disable-next-line
    store.commit('menu/setPath', (router as any).history.current.path)
    window.popStateDetected = true
})

router.beforeEach((to, from, next) => {
    const IsItABackButton = window.popStateDetected
    
    window.popStateDetected = false
    if (IsItABackButton) {
        store.commit('menu/setPath', to.path)
    }

    next()
})

export default router