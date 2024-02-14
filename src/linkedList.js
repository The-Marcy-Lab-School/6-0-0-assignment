// Question 1: Implement a Linked List

class Node {
    constructor(data = null) {

    }
}

class LinkedList {
    constructor() {

    }

    appendToTail(data) {
        // add new Node with data to tail
    }

    prependToHead(data) {
        // add new Node with data to head   
    }

    removeHead() {
        // remove the first Node in the LinkedList and returns its data
    }

    contains(data) {
        // returns true is any Node in the LinkedList contains the value data, false otherwise
    }

    length() {
        //returns the length of the LinkedList as an integer value
    }
}

// Question 2: Cycle Check
const isCyclic = (headNode) => {
    //returns true is the list has a cycle, false otherwise
};

// Question 3: Reverse a Linked List
const reverse = (headNode) => {
    //returns the new headNode
};

// Question 4: Merge Two Lists
const mergeLists = (head1, head2) => {
    //returns the head node of the merged linked list
};

// Question 5: Remove duplicates
const removeDuplicates = (headNode) => {
    //returns the headNode
};

module.exports = {
    Node, LinkedList, isCyclic, reverse, mergeLists, removeDuplicates
}