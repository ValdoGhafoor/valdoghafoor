import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lookingSide: 'default',
    currentProject: null,
    projects: [
      {
        portfolio: require('@/assets/images/portfolios/ly.png'),
        thumbnail: require('@/assets/images/thumbnails/ly.png'),
        logo: require('@/assets/images/logos/ly.png'),
        name: 'Luxurynsight'
      },
      {
        portfolio: require('@/assets/images/portfolios/agorize.png'),
        thumbnail: require('@/assets/images/thumbnails/agorize.png'),
        logo: require('@/assets/images/logos/agorize.jpg'),
        name: 'Agorize'
      },
      {
        portfolio: require('@/assets/images/portfolios/bm.png'),
        thumbnail: require('@/assets/images/thumbnails/bm.png'),
        logo: require('@/assets/images/logos/bm.png'),
        name: 'BackMarket'
      },
      {
        portfolio: require('@/assets/images/portfolios/bof.png'),
        thumbnail: require('@/assets/images/thumbnails/bof.png'),
        logo: require('@/assets/images/logos/bof.png'),
        name: 'Bank of Fashion'
      },
      {
        portfolio: require('@/assets/images/portfolios/frk.png'),
        thumbnail: require('@/assets/images/thumbnails/frk.png'),
        logo: require('@/assets/images/logos/frk.png'),
        name: 'FreelanceRepublik'
      }
    ]
  },
  actions: {
    nextProject ({ commit }) {
      commit('nextProject')
    },
    previousProject ({ commit }) {
      commit('previousProject')
    },
    setLookingSide ({ commit }, side) {
      commit('setLookingSide', side)
    },
    setCurrentProject ({ commit }, project) {
      commit('setCurrentProject', project)
    }
  },
  mutations: {
    nextProject (state) {
      const currentProject = state.currentProject
      const currentIndex = currentProject ? state.projects.indexOf(currentProject) : null

      if (currentIndex === null || currentIndex === state.projects.length - 1) {
        state.currentProject = state.projects[0]
      } else {
        state.currentProject = state.projects[currentIndex + 1]
      }
    },
    previousProject (state) {
      const currentProject = state.currentProject
      const currentIndex = currentProject ? state.projects.indexOf(currentProject) : null

      if (!currentIndex) {
        state.currentProject = state.projects[state.projects.length - 1]
      } else {
        state.currentProject = state.projects[currentIndex - 1]
      }
    },
    setLookingSide (state, side) {
      state.lookingSide = side
    },
    setCurrentProject (state, project) {
      state.currentProject = project
    }
  }
})
