// 加载https模块，只要获取网站链接的操作 ，都需要用到
const https = require('https')
    // 加载cheerio
const cheerio = require('cheerio')
const fs = require('fs')
https.get('https://movie.douban.com/top250', (res) => {
    let html = ''
        // res.on 类似于addEventListener ，用于监听数据
    res.on('data', (chunk) => {
            // html += chunk
            html = html + chunk

        })
        // 监听res数据加(载完成就执行我需要的效果
    res.on('end', () => {
        // console.log(html);
        const $ = cheerio.load(html)
        let allFilms = []
        $('li .item').each(function() {
            const title = $('.title', this).text()
            const star = $('.rating_num', this).text()
            const picture = $('.pic img', this).attr('src')
            allFilms.push({ title }, { star }, { picture })
        })
        fs.writeFile('./files.json', JSON.stringify(allFilms), (err) => {
            if (!err) {
                console.log('文件写入完成');
            }
        })
    })
})