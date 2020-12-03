import axios from 'axios'

const baseUrl = '';
 
// 跨域   浏览器造成

export function get(url) {
  return function ( params = {} ) {
    return axios.get(baseUrl + url, {
      params
    }).then( (res) => {
      const { errno, data} = res.data
      if(errno == 0 ) {
        return data
      }
    }).catch( (err) => {
      console.log(err);
    })
  }
}
