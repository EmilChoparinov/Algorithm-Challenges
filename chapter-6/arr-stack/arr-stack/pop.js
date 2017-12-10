class ArrStack {
    constructor() {
        this.stack = [];
    }

    /**
     * Removes the next values from the stack
     */
    pop() {
        let removedValue = this.stack[this.stack.length - 1];
        this.stack.length--;
        return removedValue;
    }
}

let stack = new ArrStack();