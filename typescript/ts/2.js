window.onload = function () {
    document.querySelector('.div1').addEventListener('click', function () {
        let dom = document.querySelector('.div1');
        dom.classList.remove('div1');
        console.log('success');
    })
    document.querySelector('#btn').addEventListener('click',function() {
        console.log(111);
    })
    document.querySelector('#btn').addEventListener('mouseenter',function(event) {
        // confirm('请点击')
        console.log(event.type);
        console.log(event.target);

        
    })
};
