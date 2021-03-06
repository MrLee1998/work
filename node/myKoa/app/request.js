let url = require('url')
let requset = {
  get url() {
    return this.req.url
  },

  get path() {
    return url.parse(this.req.url).pathname
  }
}

module.exports = requset