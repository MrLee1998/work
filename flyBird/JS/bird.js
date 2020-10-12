var bird = {
    //  key:value
    flyTime: null, //小鸟飞行的定时器
    wingTimer: null,   //小鸟翅膀摆动的定时器
    div: document.createElement('div'),   //创建一个div标签 
    showBird: function (parentObj) {
        this.div.style.width = '40px'   //在对象中 代表的就是对象
        this.div.style.height = '28px'   //this 在对象中 代表的就是对象
        this.div.style.backgroundImage = 'url(img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = "absolute"
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'
        parentObj.appendChild(this.div)  // appendChild() 方法从一个元素向另一个元素中移动元素。

    },
    fallSpeed: 0,    //小鸟下落的速度
    flyBird: function () {   //控制小鸟下落的函数
        bird.flyTime = setInterval(fly, 60)
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px' //bird不能用this代替 定时器的影响
            if (bird.div.offsetTop >= 395) {   //碰到顶上 清除定时器停止下掉  
                bird.fallSpeed = 0
                clearInterval(bird.flyTime)
                clearInterval(bird.wingTimer)

            }
            if (bird.div.offsetTop < 0) {   //掉到地面 清除定时器停止下掉  
                bird.div.style.top = "0px"
                bird.fallSpeed = 0
                clearInterval(bird.flyTime)
                clearInterval(bird.wingTimer)
            }
            if (bird.fallSpeed > 12) {
                bird.fallSpeed = 12
            }
        }
    },
    wingWave: function () {     //控制小鸟翅膀摆动的函数
        var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)']
        var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing, 120)
        function wing() {    //通过判断速度的正负值 决定飞行方位
            if (bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[i++]
                if (i > 1) {
                    i = 0;
                }
            }
            if (bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[j++]
                if (j > 1) {
                    j = 0;
                }
            }
        }
    }
}