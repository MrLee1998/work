const queue = []
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)

while(queue.length) {
  const top = queue[0]
  console.log(top);
  queue.shift()
}

// 链表
// 链表中的数据单位名称叫 结点， 结点在内存中是可以 离散的

function ListNode(val) {
  this.val = val 
  this.next = null
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// [1, 3, 2] 
node1.next = node3.next



// const arr = [1, 2, 3, 4]
const arr = ['h', {key: value}, 1]  // 非连续的内存


