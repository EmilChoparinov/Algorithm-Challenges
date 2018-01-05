class HashMap {
    constructor(capactiy) {
        this.table = [];
        capactiy = this.closestLargestPrime(capactiy)
        this.capactiy = capactiy;
        this.table.length = capactiy;
        this.elements = 0;
    }

    closestLargestPrime(n) {
        while (!this.isPrime(n)) {
            n++;
        }
        return n;
    }

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

    getIndex(value, div) {
        return (value % div + div) % div;
    }

    add(key, val) {
        if (this.loadFactor() > .75) this.grow();
        let index = this.getIndex(this.hashify(key), this.capactiy);
        if (!this.table[index]) {
            this.elements++;
            this.table[index] = [];
        }
        this.table[index].push(new KeyValuePair(key, val));
        return this;
    }

    toString() {
        let s = "[ ";
        for (let i = 0; i < this.table.length - 1; i++) {
            if (this.table[i]) {
                this.table[i].forEach(value => s += `${value.value}, `);
            }
        }
        if (this.table[this.table.length - 1]) {
            for (let i = 0; i < this.table[this.table - 1].length - 1; i++) {
                s += `${this.table[this.table.length - 1][i].value}, `;
            }
            let a = this.table[this.table.length - 1];
            s += `${a[a.length - 1]} `;
        }
        s += "]";
        return s;
    }

    find(key) {
        let index = this.getIndex(this.hashify(key), this.capactiy);
        let values = this.table[index];
        if (values) {
            for (let i = 0; i < values.length; i++) {
                let v = values[i];
                if (v.key == key) return v;
            }
        }
        return null;
    }

    isEmpty() {
        return (this.elements > 0) ? false : true;
    }

    remove(key) {
        let index = this.getIndex(this.hashify(key), this.capactiy);
        let value = this.table[index];
        this.table[index] = undefined;
        this.elements--;
        return (value) ? value : null;
    }

    grow() {
        this.capactiy *= 2;
        this.capactiy = this.closestLargestPrime(this.capactiy);
        for (let i = 0; i < this.table.length; i++) {
            let curVal = this.table[i];
            this.table[i] = undefined;
            if (curVal) {
                curVal.forEach(v => {
                    this.elements--;
                    this.add(v.key, v.value);
                });
            }
        }
    }

    addMap(hashmap) {
        if (hashmap instanceof HashMap) {
            let table = hashmap.table;
            for (let i = 0; i < table.length; i++) {
                if (table[i]) {
                    let nextIndex = this.getIndex(this.hashify(table[i].key), this.capactiy);
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

    setSize(capactiy) {
        if (capactiy < this.elements) throw new RangeError("capacity given is less than element count");
        capactiy = this.closestLargestPrime(capactiy);
        this.capactiy = capactiy;
        for (let i = 0; i < this.table.length; i++) {
            let curVal = this.table[i];
            this.table[i] = undefined;
            if (curVal) {
                curVal.forEach(v => {
                    this.elements--;
                    this.add(v.key, v.value);
                });
            }
        }
        this.table.length = capactiy;
    }

    loadFactor() {
        return this.elements / this.capactiy;
    }

    selectKeys(...keys) {
        let values = [];
        for (let i = 0; i < keys.length; i++) {
            let k = this.find(keys[i]);
            if (k) {
                values.push(k.value);
            }
        }
        return values;
    }
}

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return this.value;
    }
}

let hashmap = new HashMap(3);
hashmap.add("myKey", 42).add("aKey", "foo");
hashmap.add("20", 50);
hashmap.add("test", "hello");
hashmap.grow();
hashmap.grow();
hashmap.setSize(12);
console.log(hashmap.selectKeys("myKey", "aKey", "20", "test", "hello"));
console.log(hashmap.table);