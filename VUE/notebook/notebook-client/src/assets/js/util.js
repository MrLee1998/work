const baseUrl = 'http://localhost:3000/'
// 获取指定格式的时间
let time = new Date()
let curTime = `${time.getFullYear()}年${time.getMonth()}月${time.getDate()}`
export default {
  baseUrl,
  curTime
}