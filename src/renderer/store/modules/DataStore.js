const state = {
  listdata: null,
  labeldata: null,
  messagedata: null,
  menudata: null,
  screendata: null
}

const mutations = {
  RELOAD_DATA (state, type, data) {
    switch (type) {
      case 'list':
        state.listdata = data
        break
      case 'label':
        state.labeldata = data
        break
      case 'message':
        state.messagedata = data
        break
      case 'screen':
        state.screendata = data
        break
      case 'menu':
        state.menudata = data
        break
      default:
        console.log('Wrong type')
    }
  }
}

const actions = {
  refreshData ({commit, type}) {
    // get data from file
    var data = null
    commit('RELOAD_DATA', type, data)
  }
}
export default{
  state,
  mutations,
  actions
}
