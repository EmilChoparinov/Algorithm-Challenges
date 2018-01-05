class HashMultiSet {

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
        this.table[index].push(value);
        return this;
    }

    isEmpty() {
        return (this.elements > 0) ? false : true;
    }

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

    loadFactor() {
        return this.elements / this.capacity;
    }

    grow() {
        this.capacity *= 2;
        this.capacity = this.closestLargestPrime(this.capacity);
        for (let i = 0; i < this.table.length; i++) {
            let currentBucket = this.table[i];
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
}

let multiset = new HashMultiSet(3);
multiset.add("hello").add("test").add("20").add("3").add("tester");

console.time("test");
console.log(multiset.contains("test"));
console.timeEnd("test");