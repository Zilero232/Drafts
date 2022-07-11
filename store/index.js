export const state = () => ({
  activePage: 'banner',
})

export const actions = {
  activePage({ commit }, page) {
    commit('ChangeActivePage', page)
  },
}

export const mutations = {
  ChangeActivePage(state, page) {
    state.activePage = page
  },
}

export const getters = {
  getActivePage(state) {
    return state.activePage
  },
}
