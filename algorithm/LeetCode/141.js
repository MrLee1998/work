// 环形链表
let node1 ={val:1, next: null}
let node2 ={val:2, next: null}
let node3 ={val:3, next: null}
node1.next = node2;
node2.next = node3;
// console.log(node1);
var hasCycle = function(head) {
    let current = head,
        map= new Map();
    while(current) {
        if(map.has(current)){
            return true;
        }
        map.set(current, true)
        current = current.next;
    }
    return false;
};
let head = [3,2,0,-4], pos =1;
console.log(hasCycle(head,pos));