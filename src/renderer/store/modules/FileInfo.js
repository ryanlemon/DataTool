const state = {
  path: 'D:\\Develop\\VueProj\\ScreenData\\'
}
const getters = {
  listpath: state => {
    return state.path + 'sd-list\\'
  },
  messagepath: state => {
    return state.path + 'sd-message\\Default'
  },
  labelpath: state => {
    return state.path + 'sd-translation\\'
  },
  menupath: state => {
    return state.path + 'sd-menu\\'
  },
  screenpath: state => {
    return state.path + 'sd-screen\\'
  }
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
  actions,
  getters
}
