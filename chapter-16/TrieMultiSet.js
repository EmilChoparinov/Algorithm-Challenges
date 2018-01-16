class TrieNode {
    constructor(val) {
        this.val = val;
        this.nodes = [];
        this.occurrences = 0;
    }
}

class TrieMultiSet {
    constructor() {
        this.root = [];
    }

    /**
     * finds a node in the given set of nodes
     * @param {Array} nodeArray an array of TrieNodes
     * @param {String} val a string of characters
     */
    findNode(nodeArray, val) {
        if (nodeArray instanceof Array && typeof val == 'string') {
            for (let node of nodeArray) {
                if (node.val == val) {
                    return node;
                }
            }
        }
        return null;
    }

    /**
     * injects a string of character nodes into the current trie node
     * @param {TrieNode} trieNode an instance of the class TrieNode
     * @param {String} str the string to inject by-chain in the current node
     */
    injectInTrieNode(trieNode, str) {
        if (trieNode instanceof TrieNode && typeof str == 'string' && str.length != 0) {
            trieNode.nodes.push(new TrieNode(str[0]));
            let node = trieNode.nodes[trieNode.nodes.length - 1];
            for (let i = 1; i < str.length - 1; i++) {
                node.nodes.push(new TrieNode(str[i]));
                node = node.nodes[node.nodes.length - 1];
            }
            if (str.length > 1) {
                let lastNode = new TrieNode(str[str.length - 1]);
                lastNode.occurrences++;
                node.nodes.push(lastNode);
            } else {
                trieNode.nodes[trieNode.nodes.length - 1].occurrences++;
            }
            return true;
        }
        return false;
    }

    /**
     * insert a string into this trie tree set O(2n + n^2)
     * @param {String} str a string
     * @returns {Boolean} true if inserted, false if not
     */
    insert(str) {
        if (typeof str == 'string') {
            let node = this.findNode(this.root, str[0]);
            if (!node) {
                node = this.root;
                node.push(new TrieNode(str[0]));
                node = node[node.length - 1];
                for (let i = 1; i < str.length - 1; i++) {
                    node.nodes.push(new TrieNode(str[i]));
                    node = node.nodes[0];
                }
                let lastNode = new TrieNode(str[str.length - 1]);
                lastNode.occurrences++;
                node.nodes.push(lastNode);
                return true;
            } else {
                let before = this.root, c = 1;
                while (node) {
                    before = node;
                    node = this.findNode(node.nodes, str[c]);
                    c++;
                }
                if (!this.findNode(before.nodes, str[c - 1])) {
                    let res = this.injectInTrieNode(before, str.slice(c - 1, str.length));
                    if (!res) before.occurrences++;
                    return res;
                }
            }
        }
        return false;
    }

    /**
     * gets all subwords of a current trie node
     * @param {TrieNode} node starting node
     * @param {String} currentString string to append to each word
     * @param {Array} words an array of words generated from the tree
     * @returns {Array} the array of words
     */
    getWordsFromNode(node, currentString = '', words = []) {
        if (!node) return words;
        if (node.occurrences > 0) {
            currentString += node.val;
            for (let i = 0; i < node.occurrences; i++) {
                words.push({ word: currentString, occurrences: node.occurrences });
            }
            // return words;
        } else {
            currentString += node.val;
        }
        for (let n of node.nodes) {
            this.getWordsFromNode(n, currentString, words);
        }
        return words;
    }

    /**
     * gets all the words in the tree
     */
    getWords() {
        let solutions = [];
        for (let node of this.root) {
            let words = this.getWordsFromNode(node);
            words.forEach((word) => solutions.push(word.word));
        }
        return solutions;
    }

    /**
     * finds out if the current tree contains a sequence of these characters O(n^2)
     * @param {String} str
     * @returns {Boolean} true if contains, false if not
     */
    contains(str) {
        let node = this.findNode(this.root, str[0]);
        for (let i = 1; i < str.length; i++) {
            if (!node) return 0;
            node = this.findNode(node.nodes, str[i]);
        }
        return node.occurrences;
    }

    /**
     * gets first words by alphabetical-lowest order
     */
    first() {
        let word = '';
        let getLowestNode = function (nodeArray) {
            let node = nodeArray[0];
            for (let i = 1; i < nodeArray.length; i++) {
                if (nodeArray[i].val < node.val) node = nodeArray[i];
            }
            return node;
        };
        let node = getLowestNode(this.root);
        while (node) {
            word += node.val;
            node = getLowestNode(node.nodes);
        }
        return word;
    }
    /**
     * gets first words by alphabetical-lowest order
     */
    last() {
        let word = '';
        let getHighestNode = function (nodeArray) {
            let node = nodeArray[0];
            for (let i = 1; i < nodeArray.length; i++) {
                if (nodeArray[i].val > node.val) node = nodeArray[i];
            }
            return node;
        };
        let node = getHighestNode(this.root);
        while (node) {
            word += node.val;
            node = getHighestNode(node.nodes);
        }
        return word;
    }

    /**
     * remove a sequence of words in a tree, subwords are allowed
     * @param {String} str 
     * @returns {Number} count of the previous occurance before operation
     */
    remove(str) {
        let node = this.findNode(this.root, str[0]);
        let findNode = this.findNode;
        let prevCount = 0;
        let recurse = function (node, str, pointers = { fragment: false }) {
            if (!node) return;
            let next = findNode(node.nodes, str[0]);
            recurse(next, str.slice(1), pointers);
            if (!pointers.fragment && node.occurrences > 0) {
                node.occurrences--;
                pointers.fragment = true;
                prevCount = node.occurrences + 1;
                return;
            }
            if (!pointers.fragment) {
                if (str.length == 0) node.nodes = [];
                else {
                    let temp = [];
                    for (let i = 0; i < node.nodes.length; i++) {
                        if (str[0] != node.nodes[i].val) {
                            temp.push(node.nodes[i]);
                        }
                    }
                    if (temp.length > 0) {
                        pointers.fragment = true;
                    }
                    prevCount = node.occurrences + 1;
                    node.nodes = temp;
                }
            }
        };
        if (node) {
            recurse(node, str.slice(1));
        }
        return prevCount;
    }

    /**
     * given a certain string, find the closest matching one, null if root doesnt contain the same char
     * @param {String} str string to search with
     * @returns {String} the closest string to it in the trie
     */
    next(str) {
        let s = '';
        let node = this.findNode(this.root, str[0]);
        let b = node;
        let c = 1;
        while (node) {
            s += node.val;
            b = node;
            node = this.findNode(node.nodes, str[c]);
            c++;
        }
        if (b) {
            b = b.nodes[0];
            while (b) {
                s += b.val;
                b = b.nodes[0];
            }
        }
        return (s.length == 0) ? null : s;
    }

    /**
     * search the tree and grab all results that relate to the string
     * @param {String} str 
     */
    autocomplete(str) {
        let quickSort = function (arr, start = 0, end = arr.length) {
            let swap = function (arr, i, j) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            };
            let partition = function (arr, start, end) {
                let piv = arr[end - 1];
                let j = start;
                for (let i = start; i < end; i++) {
                    if (arr[i].occurrences >= piv.occurrences) {
                        swap(arr, i, j);
                        j++;
                    }
                }
                return j;
            };
            if (start >= end) return arr;
            let piv = partition(arr, start, end);
            quickSort(arr, piv + 1, end);
            quickSort(arr, start, piv - 1);
            return arr;
        };
        if (str == '') {
            let sol = [];
            for (let node of this.root) {
                let words = this.getWordsFromNode(node);
                words.forEach((word) => sol.push(word));
            }
            return quickSort(sol);
        }
        let s = '';
        let node = this.findNode(this.root, str[0]);
        let b = node;
        let c = 1;
        while (node) {
            s += node.val;
            b = node;
            node = this.findNode(node.nodes, str[c]);
            c++;
        }
        let words = this.getWordsFromNode(b, s.slice(0, str.length - 1));
        return quickSort(words);
    }
}

let tree = new TrieMultiSet();
tree.insert('code');
tree.insert('code');
tree.insert('code');
tree.insert('coding');
tree.insert('coding');
tree.insert('coding');
tree.insert('call');
tree.insert('abacadabra');
tree.insert('ababa');
tree.insert('another');
tree.insert('corner');
tree.insert('hell');
tree.insert('hell');
tree.insert('hello');
tree.insert('cost');
tree.insert('costed');
tree.insert('costing');
tree.insert('said');
// console.log(tree.contains('cost'));
console.log(tree.autocomplete(''));
// console.log(JSON.stringify(tree, null, 4));
// console.log(tree.autocomplete('cost'));