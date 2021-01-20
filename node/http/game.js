const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const game = require('../game 石头剪刀布/game.js')

let playerWon = 0
let playerLastAction = null
let sameCount = 0

http.createServer(function (req, res) {
  const parseedUrl = url.parse(req.url)
  if (parseedUrl.pathname === '/favicon.ico') {
    res.writeHead(200)
    res.end('hello')
    return
  }
  if (parseedUrl.pathname === '/game') {
    const query = querystring.parse(parseedUrl.query)
    const playerAction = query.action
    if (playerLastAction && playerAction == playerLastAction) {
      sameCount++
    } else {
      sameCount = 0
    }

    if (sameCount >= 3) {
      res.writeHead(400)
      res.end('你作弊！')
      sameCount = 9
      return
    }
    

    const result = game(playerAction)
    playerLastAction = playerAction
    if(result == 0) {
      res.end('平局')
    } else if(result == 1) {
      res.end('你赢了')
    } else {
      res.end('你输了')
    }
  }
  if (parseedUrl.pathname === '/') {
    fs.createReadStream(__dirname + '/game.html').pipe(res)
  }
}).listen(3000)