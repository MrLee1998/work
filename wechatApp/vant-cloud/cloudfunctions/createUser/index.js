// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lizun-9gtuuwmq812c470e'

cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境

// 云函数入口函数
exports.main = async(event, context) => {
    const userInfo = event.userInfo

    // 先查看user库里面有没有这个opneId
    const checkUser = await db.collection('user').where({
            openId: userInfo.openId
        }).get()
        // length>0  用户已经存在,  更新用户信息
    if (checkUser.data.length > 0) {
        await db.collection('user').doc(checkUser.data[0]._id).update({
            data: {
                avatarUrl: event.avatarUrl,
                nickName: event.nickName,
                sex: event.sex
            }
        })
    } else {
        const insertResult = await db.collection('user').add({
            data: {
                openId: event.userInfo.openId,
                avatarUrl: event.avatarUrl,
                nickName: event.nickName,
                sex: event.sex,
                name: '',
                createTime: new Date()
            }
        })
    }
}