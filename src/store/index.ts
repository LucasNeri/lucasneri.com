import Vue from 'vue'
import Vuex from 'vuex'

// Outros
import menu from './menu'

// Views
import home from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    menu
  }
})
