// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
var preorderTraversal = function(root) {
    var arr = root
    if (!root) {
        console.log(arr);
    }
    preorder(root)
    console.log(arr);

    function preorder(node) {
        arr.push(node.val)
        if (node.left != null) {
            preorder(node.left)
        }
        if (node.right != null) {
            preorder(node.right)
        }
    }
};
var root = [1, null, 2, 3]
preorderTraversal(root)