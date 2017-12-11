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