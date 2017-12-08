class ArrStack{
    constructor(){
        this.stack = [];
    }
    /**
     * Add a value to the stack
     * @param {Any} val 
     */
    push(val){
        this.stack[this.stack.length] = val;
        return this;
    }

    /**
     * Removes the next values from the stack
     */
    pop(){
        let removedValue = this.stack[this.stack.length-1];
        this.stack.length--;
        return removedValue;
    }

    /**
     * Gets the next value in the stack
     */
    top(){
        return this.stack[this.stack.length - 1];
    }

}