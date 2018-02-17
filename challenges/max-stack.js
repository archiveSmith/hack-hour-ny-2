/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = (value) => {
  this.storage[this.index] = value;
  this.index++;
  return index;
}

Stack.prototype.pop = () => {
  this.index--;
  // let pos = index - 1;
  const poppedVar = this.storage[index];
  delete this.storage[this.index];
  return poppedVar;
}

Stack.prototype.getMax = () => {
  let max = this.storage[0];
  for(let i = 0; i < this.index; i++) {
    if(this.storage[i] > max) max = this.storage[i];
  }
  return max;
}

module.exports = Stack;