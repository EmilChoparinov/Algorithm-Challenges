class ArrStack{
    constructor(){
        this.stack = [];
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
}

let stack = new ArrStack();