const state = {
  path: 'C:\\Apprise\\Latest\\ScreenData\\',
  listpath: this.path + 'sd-list\\',
  messagepath: this.path + 'sd-message\\',
  labelpath: this.path + 'sd-translation\\',
  menupath: this.path + 'sd-menu\\',
  screenpath: this.path + 'sd-screen\\'
}

const mutations = {
  BLANK_PATH (state) {
    state.path = ''
  },
  SET_PATH (state, newpath) {
    state.path = newpath
  }
}

const actions = {
  refreshPath ({commit, newpath}) {
    commit('SET_PATH', newpath)
  }
}

export default{
  state,
  mutations,
  actions
}
