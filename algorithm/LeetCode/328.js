var oddEvenList = function(head) {
    if (head == null) {
        return head;
      }
      let odd = head;         // 扫描奇数结点
      let even = head.next;   // 扫描偶数结点
      let evenHead = even;    // 保存偶链的头结点
    
      while (even != null && even.next != null) { 
        odd.next = even.next; // even.next是下一个奇数结点
        odd = odd.next;       // odd 推进到下一个奇数结点
        even.next = odd.next; // 下一个奇数结点的next是下一个偶数结点
        even = even.next;     // even 推进到下一个偶数结点
      }
      odd.next = evenHead;    // 奇链连上偶链
      return head;
}
let head = [1,2,3,4]
console.log(oddEvenList(head));
