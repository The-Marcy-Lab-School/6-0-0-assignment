class Node {
    constructor(data = null, next = null) {
        this.data = data 
        this.next = next 
    }
}

class LinkedList {
    #len = 0

    constructor() {
        this.head = null 
    }

    appendToTail(data) { // add new node to end of list
        const node = new Node(data)
        this.#len++

        if (!this.head) { // if empty list
            this.head = node // new node becomes head
            return 
        }
       
        let cur = this.head 
        while (cur.next) { // traverse to tail
            cur = cur.next 
        }

        cur.next = node // link new node to tail
    }

    prependToHead(data) { // add new node to head 
        // create new node
        // set new node's next to the head
        // change head to be the new node
        this.head = new Node(data, this.head)
        this.#len++
    }

    removeHead() {
        if (!this.head) return null 

        const data = this.head.data // save head data
        this.head = this.head.next // remove head node
        this.#len--
        return data 
    }

    contains(data) {
        let cur = this.head 

        while (cur) {
            if (cur.data === data) return true 
            cur = cur.next 
        }

        return false 
    }

    length() {
        return this.#len
    }

    print() {
        let cur = this.head, list = ""
	    while (cur) {
	      list += `${cur.data} -> `;
	      cur = cur.next;
	    }
	    console.log(list += "NULL")
    }
}

const isCyclic = head => {
    let slow = head, fast = slow.next 

    while (fast && fast.next) {
        if (fast === slow) return true 

        slow = slow.next 
        fast = fast.next.next 
    }

    return false 
};

const reverse = head => {
    let cur = head, prev = null 

    while (cur) {
        const nxt = cur.next 
        cur.next = prev 
        prev = cur 
        cur = nxt 
    }

    return prev 
};

const mergeLists = (a, b) => {
    const dummy = new Node()
    let tail = dummy 

    while (a && b) {
        if (a.data < b.data) {
            tail.next = a 
            a = a.next 
        } else {
            tail.next = b 
            b = b.next 
        }
        tail = tail.next 
    }

    tail.next = a || b // can use coalesce '??'

    return dummy.next 
};

const removeDuplicates = head => {
    const set = new Set()
    let cur = prev = head 

    while (cur) {
        if (set.has(cur.data)) prev.next = cur.next
        set.add(cur.data)
        prev = cur 
        cur = cur.next 
    }

    return head 
};

module.exports = {
    Node, LinkedList, isCyclic, reverse, mergeLists, removeDuplicates
}
