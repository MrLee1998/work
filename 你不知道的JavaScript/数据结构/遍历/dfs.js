function preorder(root) {
  if(!root) {
    return
  }
  console.log('当前遍历的节点值是:', root.val);
  //递归 遍历左子树
  preorder(root.left)
  preorder(root.right)
}

let root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    left: {
      val: 'F'
    }
  }
}
preorder(root)