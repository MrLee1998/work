// for(let i:number=1;i<=5;i++){
    
//     // while(i===3) {
//     //     
//     //     break;
//     // }   
//     console.log(i);
//     if(i===3){
//         break
//     }
//     console.log(i);
    
// }
// for(let i:number=1;i<=5;i++){
    
//     // while(i===3) {
//     //     
//     //     break;
//     // }       
//     if(i>=3){
//         continue  //跳过此次循环 继续执行
//     }
//     console.log(i);    
// }
// let names:string[]=['迪丽热巴']

// let arr:string[]=new Array()
// arr.push('hello')
// console.log(arr);
// names[1]='hello'
// console.log(names);
// let str:string=names.pop()
// console.log(str);
// console.log(names);

// let arr:number[]=[1,2,5,3,7,3,7,2]
// let max:number=0
// for(let i:number=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
//     console.log(arr[i]);
    
// }
// console.log(max);
let arr:number[]=[10,10,0,1,0,2,0,5,9]
let newArr:number[]=[]
for(let i:number=0;i<arr.length;i++){
    if(arr[i]===0){
        newArr[newArr.length]=arr[i]
     
    }
}
console.log(arr);

console.log(newArr);
