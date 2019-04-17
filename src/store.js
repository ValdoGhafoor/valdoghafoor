import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lookingSide: 'default'
  },
  actions: {
    setLookingSide ({ commit }, side) {
      commit('setLookingSide', side)
    }
  },
  mutations: {
    setLookingSide (state, side) {
      state.lookingSide = side
    }
  }
})
