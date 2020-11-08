window.onload = function(){
    document.title = '等你下课';
    let str = document.querySelector('.div1');
    console.log(str);
    console.dir(str)
    let pic = document.querySelector('#image') as HTMLImageElement;
    pic.src = '../images/2.jpeg';
    let title = document.querySelector('#title') as HTMLElement
    title.style.color='red'
    console.log(title.innerText);
    title.innerText +=  'good morning'
    console.log(title.innerText);
    let p = document.querySelectorAll('p') 
    p.forEach(function(item,index){
        // console.log(item,index);   
        let p1 = item as HTMLParagraphElement
        p1.innerText += '[' + index +']'
        console.log(item,index);   

    })
    
}
