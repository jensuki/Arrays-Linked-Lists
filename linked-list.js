/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.length == 0) {
      // if list empty, set head+tail to new node;
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // link new node to current head
      this.head = newNode; // update head to the new node
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return null; // Return null if the list is empty
    }

    // Store the value of the tail node to return later
    const valToRemove = this.tail.val;

    if (this.length === 1) {
      // If there's only one node in the list
      this.head = null; // Set head to null
      this.tail = null; // Set tail to null
    } else {
      // Traverse to the second-to-last node
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next; // Move to the second-to-last node
      }
      current.next = null; // Remove the reference to the old tail
      this.tail = current; // Update the tail to the new last node
    }

    this.length--; // Decrease the length of the list
    return valToRemove; // Return the value of the removed node
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      return null; // return null if list is empty
    }
    const headVal = this.head.val; // get head value to be removed
    this.head = this.head.next; // move head to be the next

    // if list only has one node, set tail to null also
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--; // decrement list after removing head node
    return headVal; // return original head value that was removed

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // if index is negative or exceeds list length return null
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    // initialize current node to HEAD
    let current = this.head;

    // traverse list to find node at the specific idx
    for (let i = 0; i < idx; i++) {
      current = current.next; // move to next and next
    }
    return current.val; // when val is found at the index
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    // initialize current node to be HEAD
    let current = this.head;

    // traverse list to find node at specific index
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    // set val to be value at specified index
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    // handle insertion at beginning of list
    if (idx === 0) {
      return this.unshift(val);
    }

    // handle insertion at the end of the list
    if (idx === this.length) {
      return this.push(val);
    }

    // traverse list to find node RIGHT BEFORE insertion index
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next; // move to node RIGHT BEFORE insert point
    }
    // create node with given value
    let newNode = new Node(val);
    newNode.next = current.next; // link new node to the node at insertion point
    current.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    // handle removal at beginning
    if (idx === 0) {
      return this.shift();
    }

    // handle removal at the end of list
    if (idx === this.length - 1) {
      return this.pop();
    }
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next; // move to node RIGHT BEFORE removal point
    }
    const nodeToRemove = current.next; // get node to remove
    current.next = nodeToRemove.next;

    this.length--;
    return nodeToRemove.val;


  }

  /** average(): return an average of all values in the list */

  average() {
    // check if list is empty
    if (this.length === 0) {
      return null;
    }
    // initialize sum
    let sum = 0;
    // let current be the head
    let current = this.head;

    // traverse the list and sum all node values
    while (current) {
      sum = sum + current.val; // add val of current node to sum
      current = current.next; // move to next node

    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
