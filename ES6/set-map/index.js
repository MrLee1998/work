let arr = new Map()
arr.set(1, '1')
arr.set(2, '2')
arr.set(3, 'red')
arr.set("color",'pink')
console.log(arr.get(2));
arr.forEach((element,index,mapObj) => {
    console.log(element,index,mapObj);
});
// let a = document.write(arr.get(3))
// console.log(a);
arr.forEach(function (item, key, mapObj) {
    console.log(item, key, mapObj);
});
