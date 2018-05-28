/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack(){
  this.stack = [];
  this.maxStack = [];
}

Stack.prototype.push = function(val){
  this.stack.push(val)
  let max;

  if (!this.maxStack.length || val > this.maxStack[this.maxStack.length - 1]){
    max = val;
  } else {
    max = this.maxStack[this.maxStack.length - 1];
  }

  return this.maxStack.push(max)
}

Stack.prototype.pop = function(){
  this.maxStack.pop()
  return this.stack.pop()
}

Stack.prototype.getMax = function() {
  return this.maxStack[this.maxStack.length - 1];
}


const STACK = new Stack();

console.log(STACK.push(0)); 
console.log(STACK.push(1)); 
console.log(STACK.push(2)); 
console.log(STACK.push(3)); 

console.log(STACK.pop()); 

console.log(STACK.getMax()); 
module.exports = Stack;