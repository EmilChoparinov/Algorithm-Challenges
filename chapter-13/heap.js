/**
 * implementation of heap a min heap datastructure
 */
class Heap {
    constructor() {
        this.heap = [];
    }

    /**
     * returns the left child index from a given index
     * @param {Number} index 
     */
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    /**
     * returns the right child index from a given index
     * @param {Number} index 
     */
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    /**
     * returns the parent index from a given index
     * @param {Number} index 
     */
    getParentIndex(index) {
        return Math.trunc((index - 1) / 2);
    }

    /**
     * finds out if the given index contains a left child
     * @param {Number} index 
     */
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    /**
     * finds out if the given index contains a right child
     * @param {Number} index 
     */
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    /**
     * finds out if the given index contains a parent
     * @param {Number} index 
     */
    hasParent(index) {
        return (index == 0) ? false : true;
    }

    /**
     * returns the left child of the given index
     * @param {Number} index 
     */
    getLeftChild(index) {
        return (this.hasLeftChild(index)) ? this.heap[this.getLeftChildIndex(index)] : null;
    }

    /**
     * returns the right child of the given index
     * @param {Number} index 
     */
    getRightChild(index) {
        return (this.hasRightChild(index)) ? this.heap[this.getRightChildIndex(index)] : null;
    }

    /**
     * returns the parent of the given index
     * @param {Number} index 
     */
    getParent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    /**
     * swaps two elements positions via their indices
     * @param {Number} i first index
     * @param {Number} j second index
     */
    swap(i, j) {
        let t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }

    /**
     * returns the current heaps size
     */
    size() {
        return this.heap.length;
    }

    /**
     * returns a boolean whether the heap is empty
     */
    isEmpty() {
        return (this.heap.length == 0) ? true : false;
    }

    /**
     * returns the minimun (top) of the heap
     */
    top() {
        return this.heap[0];
    }

    /**
     * comparable item to be added to the heap
     * @param {Any} val 
     */
    insert(val) {
        this.heap.push(val);
        this.heapifyUpwards();
    }

    /**
     * checks if item is in the heap
     * @param {Any} val 
     */
    contains(val) {
        for (let i = 0; i < this.heap.length; i++)
            if (this.heap[i] == val) return true;
        return false;
    }

    /**
     * fixes the heap looking up
     */
    heapifyUpwards() {
        let v = this.heap.length - 1;
        while (this.hasParent(v) && this.getParent(v) >= this.heap[v]) {
            this.swap(v, this.getParentIndex(v));
            v = this.getParentIndex(v);
        }
    }

    /**
     * fixes the heap looking down
     */
    heapifyDown() {
        let v = 0;
        while (this.hasLeftChild(v)) {
            let cur = this.getLeftChildIndex(v);
            if (this.hasRightChild(v) && this.getRightChild(v) < this.getLeftChild(v)) {
                cur = this.getRightChildIndex(v);
            }
            if (this.heap[v] < this.heap[cur]) {
                break;
            } else {
                this.swap(v, cur);
            }
            v = cur;
        }
    }

    /**
     * removes the minimum of the heap
     */
    extract() {
        let v = this.top();
        this.swap(0, this.heap.length - 1);
        this.heap.length--;
        this.heapifyDown();
        return v;
    }

    /**
     * add a set of array items to a heap from a given array
     * @param {Array} arr 
     */
    addValues(arr) {
        if (arr instanceof Array) {
            arr.forEach(v => this.insert(v));
        }
    }
}

module.exports = {
    Heap: Heap
}