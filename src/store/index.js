import createPersistedState from 'vuex-persistedstate'

const Vuex = require('vuex')
var store = new Vuex.Store({
  plugins: [createPersistedState()],
  debug: true,
  state: {
  },
  mutations: {
    
  },
  actions: {
    
  }
})
export default store
