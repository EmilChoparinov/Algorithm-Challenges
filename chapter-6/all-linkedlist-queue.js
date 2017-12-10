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

    pop(){
        let temp = this.head;
        if(temp){
            this.head = temp.next;
        }
        return this;
    }

    top(){
        return (this.head)? this.head.val : this.head;
    }

    contains(val){
        let node = this.head;
        while(node){
            if(node.val == val) return true;
            node = node.next;
        }
        return false;
    }

    isEmpty(){
        return (this.head)? false : true;
    }

    size(){
        let node = this.head;
        let c = 0;
        while(node){
            c++;
            node = node.next;
        }
        return c;
    }

    toString(){
        let node = this.head;
        let s = "[ ";
        while(node){
            if(!node.next) break;
            s += node.val + ", ";
            node = node.next;
        }
        if(node){
            s += node.val;
        }
        s += " ]";
        return s;
    }
}

class Node{
    constructor(val){
        this.next = null;
        this.val = val;
    }
}

function CompareStacks(stack1, stack2){
    if(stack1 instanceof SLStack && stack2 instanceof SLStack){
        let node1 = stack1.head
        let node2 = stack2.head;
        while(node1 != null && node2 != null){
            if(node1.val != node2.val) return false;
            node1 = node1.next;
            node2 = node2.next;
        }
        if((node1&& !node2) || (!node1 && node2)) return false;
        else return true;
    }
}

let linkedStack = new SLStack();
linkedStack.push(1).push(2).push(3).pop();
console.log(linkedStack.toString());