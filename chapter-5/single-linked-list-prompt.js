const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a value to the linked list
     * @param {Object} val 
     */
    add(val) {
        var lastNode = this.head;
        var addNode = new node(val);
        this.head = addNode;
        addNode.next = lastNode;
        if (this.back == null) this.back = addNode;
        return this;
    }

    /**
     * returns a formatted string of the list
     */
    toString() {
        let node = this.head;
        let s = "[ "
        while (node != null) {
            if (node.next == null) break;
            s += node.val + ", ";
            node = node.next;
        }
        if (node != null) s += node.val;
        s += " ]"
        return s;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var list = new LinkedList();

/**
 * async reader per line
 */
async function readLine() {
    let promise = new Promise((resolve, reject) => {
        rl.question('Please enter a value to add to the list: ', function (val) {
            resolve(val);
        });
    })
    return promise;
};

/**
 * runner for async reader
 */
async function run() {
    while (true) {
        let s = await readLine();
        if (s == "Close") {
            console.log(list.toString());
            process.exit(0);
        }
        list.add(s);
    }
}

run();