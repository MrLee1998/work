// 数据域
// 左子树
// 右子树

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
const node = new TreeNode(1)

// 前序遍历
// 中序遍历   递归遍历
// 后序遍历


// 层次遍历  == 迭代遍历
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};
let treeArr = []

let findTree = function(root) {
  if(!root) return
  treeArr.push(root.val)
  findTree(root.left)
  findTree(root.right)
  return treeArr
}
findTree(root)
console.log(treeArr);