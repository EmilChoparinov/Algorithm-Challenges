/**
 * HashMap datastructure base class
 */
class HashMap {
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


    /**
     * adds an item to the hashtable
     * @param {String} key key to add to the hash
     * @param {Any} val value to be stored
     */
    add(key, val) {
        if (this.loadFactor() > .75) this.grow();
        let index = this.getIndex(this.hashify(key));
        if (!this.table[index]) {
            this.table[index] = [];
        }
        if (this.table[index].length == 0) this.elements++;
        this.table[index].push(new KeyValuePair(key, val));
        return this;
    }

    /**
     * returns the string representation of the hashmap class
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

    /**
     * finds the given value from a given key O(1) time, O(n) if collision occurs
     * @param {String} key 
     */
    find(key) {
        let index = this.getIndex(this.hashify(key), this.capacity);
        let values = this.table[index];
        if (values) {
            for (let i = 0; i < values.length; i++) {
                let v = values[i];
                if (v) {
                    if (v.key == key) return v;
                }
            }
        }
        return null;
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
    remove(key) {
        let index = this.getIndex(this.hashify(key), this.capacity);
        let value = this.table[index];
        let n;
        for (let i = 0; i < value.length; i++) {
            if (value[i].key == key) {
                n = value[i];
                if (value.length == 1) {
                    this.elements--;
                    this.table[index] = [];
                    break;
                }
                value[i] = undefined;
                break;
            }
        }
        return (n) ? n.value : null;
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
                        this.add(item.key, item.value);
                    });
                }
            }
        }
    }

    /**
     * take all values of a given hashmap and add them to this hashmap
     * @param {HashMap} hashmap 
     */
    addMap(hashmap) {
        if (hashmap instanceof HashMap) {
            let table = hashmap.table;
            for (let i = 0; i < table.length; i++) {
                if (table[i]) {
                    let nextIndex = this.getIndex(this.hashify(table[i].key), this.capacity);
                    if (this.table[nextIndex]) {
                        this.table[nextIndex].push(new KeyValuePair(table[i].key, table[i].value));
                    }
                    else if (!this.table[nextIndex]) {
                        this.table[nextIndex] = [];
                        this.table[nextIndex].push(new KeyValuePair(table[i].key, table[i].value));
                        this.elements++;
                    }
                }
                if (this.loadFactor() > .75) this.grow();
            }
        }
    }

    /**
     * sets the capacity of the table to approximately the capacity given
     * @param {Number} capacity new capacity
     */
    setSize(capacity) {
        capacity = this.closestLargestPrime(capacity);
        this.capacity = capacity;
        for (let i = 0; i < this.table.length; i++) {
            let currentBucket = this.table[i];
            this.table[i] = [];
            if (currentBucket) {
                if (currentBucket.length > 0) {
                    this.elements--;
                    currentBucket.forEach(item => {
                        this.add(item.key, item.value);
                    });
                }
            }
        }
        this.table.length = capacity;
    }

    /**
     * calculates the current load factor
     */
    loadFactor() {
        return this.elements / this.capacity;
    }

    /**
     * select an n amount of keys from the table
     * @param {...String} keys 
     * @returns {Array} an array of the values stored
     */
    selectKeys(...keys) {
        let values = [];
        for (let i = 0; i < keys.length; i++) {
            let item = this.find(keys[i]);
            if (item) {
                values.push(item.value);
            }
        }
        return values;
    }
}

/**
 * key value datastructure for HashMaps
 */
class KeyValuePair {

    /**
     * KeyValuePair constructor
     * @param {String} key the key to be used to retrieve the values
     * @param {Any} value the value to be stored at the key place
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    /**
     * returns the string representation of the KeyValuePair class
     */
    toString() {
        return this.value;
    }
}

let hashmap = new HashMap(3);

hashmap.add("test", 30).add("20", 40).add("Hello", "hi");
hashmap.grow();
hashmap.grow();
hashmap.grow();
console.log(hashmap.elements);
console.log(hashmap.toString());