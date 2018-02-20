/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  if (!head.next || !head) return head;
  let currentNode = head.next;
  let previousNode = head;
  while (currentNode) {
    head.next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = head.next;
  }
  return previousNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
