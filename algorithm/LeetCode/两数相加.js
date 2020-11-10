var addTwoNumbers = function(l1, l2) {
    if(l1.length>l2.length){
        var j=l1.length-l2.length
        for(var i=0;i<j;i++){
            l2[l2.length-1+i]=0
        }
        for(i=0;i<l1.length;i++){
            var arr=[];
            arr[i]=l1[i]+l2[i]
        }
        console.log(arr);
    }
    else {
        j=l2.length-l1.length
        for(var i=0;i<j;i++){
            l1[l1.length-1+i]=0
        }
    }
    console.log();
    
    return toString(Number(l1)+Number(l2))
};
var l1=[2,4,3,],
    l2=[5,6,3];
    if(l1.length>=l2.length){
        var j=l1.length-l2.length
        for(var i=0;i<j;i++){
            l2[l2.length-1+i]=0
        }
        for(i=0;i<l1.length;i++){
            var arr=[];
            arr[i]=l1[i]+l2[i]
            console.log(arr[i]);
        }
        
    }
console.log(l1);
addTwoNumbers(l1,l2)
