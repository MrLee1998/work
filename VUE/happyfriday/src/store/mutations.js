const ADD_ITEMNUM = 'ADD_ITEMNUM'
const ADD_ANSOWER = 'ADD_ANSOWER'
export default {
  // 点击进入下一题
  [ADD_ITEMNUM] (state, num) {
    state.itemNum += num
  },
  // 记录答案
  [ADD_ANSOWER] (state, id) {
    state.ansowerId.push(id)
  }
}