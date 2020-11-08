let songs: string[] = ['hello word', '你好呀', 'ppy']
songs.forEach(function(a, b){  // a为值 ，b为索引
    console.log(a, b);
    
})
let nums: number[] = [1,12,4,2,6,11,27] 
let has:boolean =false
nums.forEach(function(num){
    if(num>10){
        has=true
    }
})
console.log(has);
