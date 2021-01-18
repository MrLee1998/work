// 给定一个排序链表， 删除所有的含有重复数组的节点， 只保留原始链表中没有重复出现的数字
// 1 > 2 > 3 > 3 > 4 > 4 > 5  1 > 2 > 5

function ListNode(val, next) {
  this.val = val
  this.next = next
}

const deleteDuplicates = function(head) {
  if(!head || !head.next) {
    return head
  }

  //  dummy
  let dummy = new ListNode()
  // dummy 永远指向头节点
  dummy.next = head
  let cur = dummy

  while(cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while(cur.next && cur.next.val === val) {
        // 删除
        cur.next = cur.next.val
      }
    } else {
      // 移动节点
      cur = cur.next
    }
  }
  return dummy.next
}