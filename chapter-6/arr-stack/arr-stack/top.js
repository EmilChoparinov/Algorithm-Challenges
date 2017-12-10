class ArrStack{
    constructor(){
        this.stack = [];
    }

    /**
     * Gets the next value in the stack
     */
    top(){
        return this.stack[this.stack.length - 1];
    }
}

let stack = new ArrStack();