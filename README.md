# Problem Set: Linked Lists

## Directions

In this assignment, you will build a `Node` class and a `LinkedList` class. Then, you will implement a few class interview problems using your classes.

All code should be done in `linkedList.js` and associated tests can be found in the `.spec.js` file.

Use Test Driven Development to guide you. For JavaScript, run `npm install` to download dependencies. Run `npm test` to run tests locally. Ensure all tests are passing before submitting this problem set!

## Short Response

Do them first! There are only 4 questions.

## Class Coding Exercise

1. Implement a `Node` class and `LinkedList` class. 

## Interview Problems

These are common interview problems and you can find an algorithm to solve them online. That's okay!

However, we encourage you to **spend at least 15 minutes** attempting to come up with an algorithm on your own before looking it up. If you find an algorithm online, **STOP before copying** and take time to **internalize the algorithm**.

1. Given the head node of a singly linked list, write a function which returns a boolean indicating if the linked list contains a "cycle". A cycle is when a node's `next` pointer points back to a previous node in the list. This is also sometimes known as a circularly linked list.

2. Write a function to reverse a linked list **in place** (don't make a new linked list). The function will take in the head node of the list as an input and return the new head node of the list.

3. Merge two **sorted** linked lists and return **a new sorted list**. The new list should be made by splicing together the nodes of the first two lists. 

  For example:
  ```
  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
  ```

5. Write a function that removes duplicates from a linked list and returns the head node of the list.
