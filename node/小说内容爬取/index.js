const http = require('http')
const https = require('https')
const fs = require('fs')
const cheerio = require('cheerio')

http.get('http://m.paoshuzw.com/wapbook/10489_4534454.html', function(req, res) {
  var html = '';
  req.on('data', function(data) {
    html += data
  })
  req.on('end', function() {
    var reg = /http.+.html/g
    const $ = cheerio.load(html, {decodeEntities: false})
    var _c = $('.reader_box  .bookinfo a').attr('href');
    console.log(_c);
  })
})