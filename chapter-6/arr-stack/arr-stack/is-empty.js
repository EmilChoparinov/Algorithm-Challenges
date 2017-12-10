class ArrStack{
    constructor(){
        this.stack = [];
    }

    /**
     * Finds if the stack is empty
     */
    isEmpty(){
        return (this.stack.length > 0)? false: true; 
    }
}

let stack = new ArrStack();