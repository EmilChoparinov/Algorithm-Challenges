class CirQueue {
    /**
     * constructor
     * @param {Number} cap the set capacity of the queue
     */
    constructor(cap) {
        this.head = 0;
        this.tail = 0;
        this.arr = [];
        this.arr.length = cap - 1;
        this.capacty = cap - 1;
        this.arr.fill(undefined);
    }

    /**
     * Get front item
     */
    front() {
        return this.arr[this.head];
    }

    /**
     * Checks if queue is empty
     */
    isEmpty() {
        if (this.head == this.tail) return true;
        return false;
    }

    /**
     * Checks if queue is full
     */
    isFull() {
        return (this.tail + 1) % this.capacty == this.head
    }

    /**
     * Gets the current queue size
     */
    size() {
        return Math.abs(this.tail - this.head);
    }

    /**
     * Adds item to the queue
     * @param {Any} val 
     */
    enqueue(val) {
        if (this.arr[this.tail] == undefined) {
            this.arr[this.tail] = val;
        }
        else if (!this.isFull()) {
            this.tail = (this.tail + 1) % this.capacty;
            this.arr[this.tail] = val;
        }
    }

    /**
     * Removes the next item to be removed in the queue
     */
    dequeue() {
        if (this.arr[this.head] != undefined) {
            this.arr[this.head] = undefined;
        }
        else if (!this.isEmpty()) {
            this.head = (this.head + 1) % this.capacty;
            this.arr[this.head] = undefined;
        }
    }

    /**
     * Finds if the given item is in the queue
     * @param {Any} val 
     */
    contains(val) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == val) return true;
        }
        return false;
    }

    toString() {
        return this.arr;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var cirQueue = new CirQueue(5);
console.log(cirQueue.toString());
for (let i = 5; i < 9; i++) {
    cirQueue.enqueue(i);
}
console.log(cirQueue.toString());
for (let i = 5; i < 9; i++) {
    cirQueue.dequeue(i);
}
console.log(cirQueue.toString());
for (let i = 8; i < 15; i++) {
    cirQueue.enqueue(i);
}
console.log(cirQueue.toString());
console.log(cirQueue.toString(), cirQueue.head, cirQueue.tail);
for (let i = 20; i < 35; i++) {
    cirQueue.enqueue(i);
}
console.log(cirQueue.toString());