const puppeteer = require('puppeteer');
const $ = require('cheerio');
async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://juejin.cn/books',{
        waitUnitl: 'networdidle0'
    });
    // await page.screenshot({
    //     path: './juejin.png'
    // })
    // 获取html 之前  执行几次下拉动作
    await page.evaluate(function(){
        function req() {
            return new Promise((resolve,reject) => {
                setTimeout(()=> {
                    document.querySelector('.copy-right').scrollIntoView() //document 浏览器才有
                    resolve()
                },2000)
            })
        }
        async function run() {
            for(let i=0; i<4; i++){
                await req()
            }
        } 
        // async 执行完 返回的就是 promise
        // run() 这个promise 只有执行了4次下拉加载 才会resolve
        // page.evaluate 将等待 promise完成
        return run()
    })
    const html = await page.content()
    // console.log(html);
    const books = $('.info',html)
    let booksInfo = []
    books.each(function(){
        const book = $(this)
        let name = $(book.find('.title')).text().trim()
        let auth = $(book.find('.author-name')).text().trim()
        console.log(name,auth);
        booksInfo.push({
            name,auth
        })
    })
    const fs = require('fs');
    fs.writeFile('./books.json',JSON.stringify(booksInfo,null,2), (err) => {
        if(!err){
            console.log('success');
        }
    })
    await browser.close();
}
run()