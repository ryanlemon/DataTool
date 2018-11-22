const state = {
  label: null
}

const mutations = {
  LOAD_LABEL (state, data) {
    state.label = null
    state.label = data
  }
}

const actions = {
  refreshLabel ({commit}, data) {
    commit('LOAD_LABEL', data)
  }
}

export default{
  state,
  mutations,
  actions
}
