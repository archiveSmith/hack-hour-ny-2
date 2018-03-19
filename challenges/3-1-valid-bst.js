/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

traverse = function(iteratorFunc, order) {

    // iteratorFunc(this.left.value);
    if(this.left) this.left.traverse(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    // iteratorFunc(this.right.value);
    if(this.right) this.right.traverse(iteratorFunc, order);


}



function validBST(tree) {
    if (tree.left === null && tree.right === null) {
        return true;
    }
    
    if (tree.left !== null && Math.max(tree.left) > tree.value)
        return false;
    if (tree.right !== null && Math.min(tree.right) < tree.value)
        return false;
    if (!validBST(tree.left) || !validBST(tree.right))
        return false;
    
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
