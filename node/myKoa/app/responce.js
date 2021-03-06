let responce = {
  set body(value) {
    this.res.statusCode = 200
    this._body = value
    console.log(value);
  },
  get body() {
    return this._body
  }
}

module.exports = responce