'use strict'
const env='dev'
// 接口错误弹出文案
const defaultAlertMessahe='错误 ，请重试'
const defaultbarTitle= {
  en: 'ikcamp english study'
}
const defaultImg = {
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}
let core = {
  env: env,
  defaultAlertMessage: defaultAlertMessahe,
  defaultbarTitle: defaultbarTitle,
  defaultImg: defaultImg,
  isDev: env === 'dev',
  isProduction: env ==='production'  
}
export default core
