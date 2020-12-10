export default {
  addNum( {commit, state}, id ) {
    commit('ADD_ANSOWER', id)
    if(state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  }
}