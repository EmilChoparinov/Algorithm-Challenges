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