String.prototype.trim1 = function (){
    let s = "";
    let left = 0;
    let right = this.length - 1;
    while(left != " " || right != " "){
        if(this[left] == " "){
            left++;
        }
        if(this[right] == " "){
            right--;
        }
        if(this[left] != " " && this[right] != " ") break;
    }
    for(let i = left; i < right; i++){
        s += this[i];
    }
    return s;
}

let r = "  heello  "
console.log(r.trim1());