// Question 1: Implement a Linked List

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  #length = 0;
  constructor() {
    this.head = null;
  }

  appendToTail(data) {
    this.#length++;
    const newNode = new Node(data); // Create new node
    if (!this.head) return (this.head = newNode); // If no head, head is new node

    let tail = this.head; // Initialize tail
    while (tail.next) tail = tail.next; // Stop at tail
    tail.next = newNode; // Set tails next to be new node
  }

  prependToHead(data) {
    // add new Node with data to head
    this.#length++;
    const newNode = new Node(data); // Create new node
    if (!this.head) return (this.head = newNode); // If no head, node is new head

    newNode.next = this.head; // Add to head
    this.head = newNode; // Change head to reflect new change
  }

  removeHead() {
    // remove the first Node in the LinkedList and returns its data
    this.#length--;
    if (!this.head) return null; // If no head, return nothing

    const removedData = this.head.data; // Store head data
    this.head = this.head.next; // Set head equal to heads next
    return removedData; // Return removed data
  }

  contains(data) {
    // returns true is any Node in the LinkedList contains the value data, false otherwise
    let cur = this.head; // Pointer initialized to head

    while (cur) {
      // Iterate while list nodes exist
      if (cur.data === data) return true; // If found data
      cur = cur.next; // Move pointer up
    }

    return false; // If not found
  }

  length() {
    //returns the length of the LinkedList as an integer value
    return this.#length;
  }
}

// Question 2: Cycle Check
const isCyclic = (head) => {
  //returns true is the list has a cycle, false otherwise
  let s = head,
    f = head;

  while (f && f.next) {
    f = f.next.next;
    s = s.next;
    if (f === s) return true;
  }

  return false;
};

// Question 3: Reverse a Linked List
const reverse = (head) => {
  //returns the new headNode
  let prev = null,
    cur = head;

  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }

  return prev;
};

// Question 4: Merge Two Lists
const mergeLists = (head1, head2) => {
  //returns the head node of the merged linked list
  let c1 = head1,
    c2 = head2;
  let list = new Node();
  const newHead = list;

  while (c1 && c2) {
    if (c1.data < c2.data) {
      list.next = c1;
      c1 = c1.next;
    } else {
      list.next = c2;
      c2 = c2.next;
    }
    list = list.next;
  }

  list.next = c1 ? c1 : c2; // Append any remaining nodes to end

  return newHead.next;
};

// Question 5: Remove duplicates
const removeDuplicates = (head) => {
  //returns the headNode
  const set = new Set()
  let cur = head;

  while (cur) {
    while (cur.next && set.has(cur.next.data)) cur.next = cur.next.next;
    set.add(cur.data)
    cur = cur.next;
  }

  return head;
};

module.exports = {
  Node,
  LinkedList,
  isCyclic,
  reverse,
  mergeLists,
  removeDuplicates,
};
