import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lookingSide: 'default',
    currentProject: null
  },
  actions: {
    setLookingSide ({ commit }, side) {
      commit('setLookingSide', side)
    },
    setCurrentProject ({ commit }, project) {
      commit('setCurrentProject', project)
    }
  },
  mutations: {
    setLookingSide (state, side) {
      state.lookingSide = side
    },
    setCurrentProject (state, project) {
      state.currentProject = project
    }
  }
})
