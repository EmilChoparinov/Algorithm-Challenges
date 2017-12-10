class Deque {
    constructor() {
        this.head = null;
    }

    /**
     * Add item to front to deque
     * @param {Any} val 
     */
    pushFront(val) {
        let temp = this.head;
        let newNode = new Node(val);
        this.head = newNode;
        newNode.next = temp;
        return this;
    }

    /**
     * Add item to back of deque
     * @param {Any} val 
     */
    pushBack(val) {
        let node = this.head;
        let newNode = new Node(val);
        while (node) {
            if (!node.next) break;
            node = node.next;
        }
        if (node) {
            node.next = newNode;
        } else {
            this.head = newNode;
        }
        return this;
    }

    /**
     * Remove item from front of deque
     */
    popFront() {
        let temp = this.head;
        if(temp){
            this.head = temp.next; 
        }else{
            this.head = null;
        }
        return temp;
    }

    /**
     * Remove item from back of deque
     */
    popBack() {
        let prevNode = null;
        let node = this.head;
        while(node){
            if(!node.next) break;
            prevNode = node;
            node = node.next;
        }
        if(prevNode){
            prevNode.next = node.next;
        }else{
            this.head = null;
        }
        return node;
    }

    /**
     * Get front item of deque
     */
    front() {
        return this.head;
    }

    /**
     * Get back item of deque
     */
    back() {
        let node = this.head;
        while(node){
            if(!node.next) return node;
            node = node.next;
        }
    }

    /**
     * Check if deque contains this item
     * @param {Any} val 
     */
    contains(val) {
        let node = this.head;
        while(node){
            if(node.val == val) return true;
            node = node.next;
        }
        return false;
    }

    /**
     * Check if deque is null
     */
    isEmpty() {
        return (this.head)? false: true;
    }

    /**
     * to string representation of this object
     */
    toString() {
        let node = this.head;
        let s = "[ ";
        while (node) {
            if (!node.next) break;
            s += node.val + ", ";
            node = node.next;
        }
        if (node) {
            s += node.val;
        }
        s += " ]";
        return s;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var deque = new Deque();
deque.pushFront(1).pushFront(2).pushFront(3).pushBack(0).pushBack(-1).pushBack(-2);
console.log(deque.toString(), deque.front().val, deque.back().val);