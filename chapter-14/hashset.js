class HashSet {

    constructor(capacity) {
        this.table = [];
        capacity = this.closestLargestPrime(capacity)
        this.capacity = capacity;
        this.elements = 0;
    }

    /**
    * finds the next prime number from a given lower bound n
    * @param {Number} n current number
     */
    closestLargestPrime(n) {
        while (!this.isPrime(n)) {
            n++;
        }
        return n;
    }

    /**
     * finds if a number is prime
     * O(sqrt(n)/2) time
     * @param {Number} n number to check
     */
    isPrime(n) {
        if (typeof n == 'number') {
            if (n == 2) return true;
            if (n % 2 == 0 || n <= 1) return false;
            let sqrtNum = Math.sqrt(n) + 1;
            for (let i = 0; i < sqrtNum; i += 2)
                if (n % i == 0) return false;
            return true;
        }
    }

    /**
     * simple hash for a given key string
     * @param {String} string 
     */
    hashify(string) {
        if (typeof string == 'string') {
            var hash = 0;
            if (string.length == 0) return hash;
            for (let i = 0; i < string.length; i++) {
                let char = string.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash &= hash;
            }
            return hash;
        }
    }

    /**
     * gets the index where an item should be placed in the hashtable
     * @param {Number} value hashed number
     * @param {Number} div divisor (usually the capacity)
     */
    getIndex(value, div = this.capacity) {
        return (value % div + div) % div;
    }

    add(value) {
        if (this.loadFactor() > .75) this.grow();
        let index = this.getIndex(this.hashify(value));
        if (!this.table[index]) {
            this.table[index] = [];
            this.elements++;
        }
        let t = this.table[index];
        for (let i = 0; i < t.length; i++) {
            if (t[i] == value) return this;
        }
        this.table[index].push(value);
        return this;
    }

    /**
     * checks if the table is empty
     */
    isEmpty() {
        return (this.elements > 0) ? false : true;
    }

    /**
     * removes the given value from the table
     * @param {String} key 
     */
    remove(value) {
        let index = this.getIndex(this.hashify(value));
        let item = this.table[index];
        let n;
        for (let i = 0; i < item.length; i++) {
            if (item[i] == value) {
                n = item[i];
                if (item.length == 1) {
                    this.elements--;
                    this.table[index] = [];
                    break;
                }
                item[i] = undefined;
                break;
            }
        }
        return (n) ? n : null;
    }

    /**
     * calculates the current load factor
     */
    loadFactor() {
        return this.elements / this.capacity;
    }

    /**
     * grows the array approximately double the size
     */
    grow() {
        this.capacity *= 2;
        this.capacity = this.closestLargestPrime(this.capacity);
        for (let i = 0; i < this.table.length; i++) {
            let currentBucket = this.table[i];
            this.table[i] = [];
            if (currentBucket) {
                if (currentBucket.length > 0) {
                    this.elements--;
                    currentBucket.forEach(item => {
                        this.add(item);
                    });
                }
            }
        }
    }

    /**
     * sets the capacity of the table to approximately the capacity given
     * @param {Number} capacity new capacity
     */
    setSize(capacity) {
        this.capacity = this.closestLargestPrime(capacity);
        for (let i = 0; i < this.table.length; i++) {
            for (let i = 0; i < this.table.length; i++) {
                let currentBucket = this.table[i];
                this.table[i] = [];
                if (currentBucket) {
                    if (currentBucket.length > 0) {
                        this.elements--;
                        currentBucket.forEach(item => {
                            this.add(item);
                        });
                    }
                }
            }
        }
    }

    /**
     * checks if the set contains this value
     * @param {Any} value 
     */
    contains(value) {
        let index = this.getIndex(this.hashify(value));
        let bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i] == value) return true;
            }
        }
        return false;
    }

    /**
     * returns the string representation of the HashSet class
     */
    toString() {
        let s = "[ ";
        for (let i = 0; i < this.table.length - 1; i++) {
            if (this.table[i]) {
                this.table[i].forEach(value => {
                    if (value) {
                        s += `${value}, `
                    }
                });
            }
        }
        if (this.table[this.table.length - 1]) {
            let a = this.table[this.table.length - 1];
            for (let i = 0; i < a.length - 1; i++) {
                if (a[i]) {
                    s += `${a[i]}, `;
                }
            }
            s += `${a[a.length - 1]} `;
        }
        s += "]";
        return s;
    }
}

let set = new HashSet(3);
set.add("hello").add("test").add("20").add("3").add("tester").add("test");

console.log(set.toString());