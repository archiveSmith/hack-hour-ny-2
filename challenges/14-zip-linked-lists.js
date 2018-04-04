/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

 function Node(val) {
   this.value = val;
   this.next = null;
 }

 function zip(l1, l2) {
   if (!l1) return l2;
   let newlist = l1;
   let curentNewlist = newlist;
   let currentNode1 = l1.next;
   let currentNode2 = l2;

   while (currentNode1 || currentNode2) {
     if (currentNode2) {
       curentNewlist.next = currentNode2;
       currentNode2 = currentNode2.next;
       curentNewlist = curentNewlist.next;
     }
     if (currentNode1) {
       curentNewlist.next = currentNode1;
       currentNode1 = currentNode1.next;
       curentNewlist = curentNewlist.next;
     }
   }
   return newlist;
 }

module.exports = {Node: Node, zip: zip};