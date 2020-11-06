function add(num:number[]): number{
    let j:number=0
    for(let i:number=0;i<num.length;i++){    
        j=j+num[i]       
    }
    // console.log(j);
    return j
    
}
let arr:number[]=[2,4,5]
console.log(add(arr));
