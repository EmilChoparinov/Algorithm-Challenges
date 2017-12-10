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

    /**
     * See if it contains a values
     * @param {Any} val 
     * @returns {Boolean}
     */
    contains(val){
        this.stack.forEach(function(e){
            if(e.val == val) return true;
        });
        return false;
    }

    /**
     * Finds out if the stack is empty
     */
    isEmpty(){
        return (this.stack.length > 0)? false: true; 
    }

    /**
     * Get the stack size
     */
    size(){
        return this.stack.length;
    }
}

let stack = new ArrStack();
console.log(stack.isEmpty());