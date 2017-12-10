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
}

let stack = new ArrStack();