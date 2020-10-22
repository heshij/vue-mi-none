import * as types from './mutation-types'

const mutations = {
  [types.SET_HEADER_SCROLL](state, headerScroll) {
    state.headerScroll = headerScroll
  }
}

export default mutations
