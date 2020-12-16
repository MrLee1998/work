const mysql = require('mysql')
const config = require('./defaultConfig')

// 连接线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 用户登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function(username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 注册用户
let insertUser = function(value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, value)
}

// 查找文章
let findNoteListByType = function(note_type) {
  let _sql = `select * from note where note_type="${note_type}";`
  return allServices.query(_sql)
}

// 根据id查找对应文章
let findNoteDetailById = function(id) {
  let _sql = `select * from note where id="${id}";`
  return allServices.query(_sql)
}

//插入笔记到数据库 
//note_content: this.content,
// head_img: this.preImg,
// title: this.title,
// note_type: this.selectCon,
// userId: curUserId,
// nickname: nickname
let insertNoteContent = function(value) {
  let _sql = `insert into note set note_content=?,head_img=?,title=?,note_type=?,useId=?,nickname=?,c_time=?;`
  return allServices.query(_sql, value)

}
module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
  insertNoteContent
}