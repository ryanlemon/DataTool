const state = {
  // path: 'D:\\Develop\\VueProj\\ScreenData\\'
  path: 'C:\\GitHub\\ScreenData\\'
}
const getters = {
  listpath: state => {
    return state.path + 'sd-list\\'
  },
  messagepath: state => {
    return state.path + 'sd-messages\\Default.json'
  },
  labelpath: state => {
    return state.path + 'sd-translation\\Default.json'
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
