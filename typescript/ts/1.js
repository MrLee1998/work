window.onload = function () {
    document.title = '等你下课';
    var str = document.querySelector('.div1');
    console.log(str);
    console.dir(str);
    var pic = document.querySelector('#image');
    pic.src = '../images/2.jpeg';
    var title = document.querySelector('#title');
    title.style.color = 'red';
    console.log(title.innerText);
    title.innerText += 'good morning';
    console.log(title.innerText);
    var p = document.querySelectorAll('p');
    p.forEach(function (item, index) {
        // console.log(item,index);   
        var p1 = item;
        p1.innerText += '[' + index + ']';
        console.log(item, index);
    });
};
