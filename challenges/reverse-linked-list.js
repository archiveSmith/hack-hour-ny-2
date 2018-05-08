/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
// let A = new Node(1);
// 		A.next = new Node(3);
// 		A.next.next = new Node(5);
// 		A.next.next.next = new Node(7);


function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  var prev = null;
  var curr = head;
  var next;
  
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  head = prev;
  return head;
}

const showList = (head) => {
	let current = head;
	console.log(current.value)
	while (current.next !== null){
		current = current.next;
		console.log(current.value)
	}
}

//showList(reverseLinkedList(A));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
