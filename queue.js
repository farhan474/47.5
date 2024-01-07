/** Node: node for a queue. */
class Node {
	constructor(val) {
	  this.val = val;
	  this.next = null;
	}
  }
  
  /** chained-together nodes where you can remove from the front or add to the back. */
  class Queue {
	constructor() {
	  this.first = null;
	  this.last = null;
	  this.size = 0;
	}
  
	/** adds new value to end of the queue. */
	enqueue(val) {
	  const newNode = new Node(val);
	  if (!this.first) {
		this.first = newNode;
		this.last = newNode;
	  } else {
		this.last.next = newNode;
		this.last = newNode;
	  }
	  this.size++;
	}
  
	/** removes the node from the start of the queue and return its value. Should throw an error if the queue is empty. */
	dequeue() {
	  if (this.isEmpty()) {
		throw new Error('Cannot dequeue from an empty queue.');
	  }
  
	  const removedNode = this.first;
	  this.first = this.first.next;
  
	  if (!this.first) {
		this.last = null;
	  }
  
	  this.size--;
	  return removedNode.val;
	}
  
	/** returns the value of the first node in the queue. */
	peek() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.first.val;
	}
  
	/** returns true if the queue is empty, otherwise false */
	isEmpty() {
	  return this.size === 0;
	}
  }
  
  module.exports = Queue;
  