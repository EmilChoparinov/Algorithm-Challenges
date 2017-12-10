class SLStack{
    constructor(){
        this.head = null;
    }

    push(val){
        let temp = this.head;
        let node = new Node(val);
        this.head = node;
        node.next = temp;
        return this;
    }

    toString(){
        let node = this.head;
        let s = "[ ";
        while(node){
            if(!node.next) break;
            s += node.val + ", ";
            node = node.next;
        }
        s += node.val + " ]";
        return s;
    }
}

class Node{
    constructor(val){
        this.next = null;
        this.val = val;
    }
}

let linkedStack = new SLStack();
linkedStack.push(1).push(2).push(3);
console.log(linkedStack.toString());
