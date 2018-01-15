class TrieNode {
    constructor(val) {
        this.val = val;
        this.nodes = [];
    }
}

class TrieSet {
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
            for (let i = 1; i < str.length; i++) {
                node.nodes.push(new TrieNode(str[i]));
                node = node.nodes[node.nodes.length - 1];
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
                for (let i = 1; i < str.length; i++) {
                    node.nodes.push(new TrieNode(str[i]));
                    node = node.nodes[0];
                }
                return true;
            } else {
                let before = this.root, c = 1;
                while (node) {
                    before = node;
                    node = this.findNode(node.nodes, str[c]);
                    c++;
                }
                if (!this.findNode(before.nodes, str[c - 1])) {
                    return this.injectInTrieNode(before, str.slice(c - 1, str.length));
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
        if (node.nodes.length == 0) {
            currentString += node.val;
            words.push(currentString);
            return words;
        }
        currentString += node.val;
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
            words.forEach((word) => solutions.push(word));
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
            if (!node) return false;
            node = this.findNode(node.nodes, str[i]);
        }
        return true;
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
     * @returns {Object} {success, charRemoval}
     */
    remove(str) {
        let node = this.findNode(this.root, str[0]);
        let findNode = this.findNode;
        let flag = false;
        let recurse = function (node, str, pointers = { fragment: false }) {
            if (!node) return;
            if (node.nodes.length == 0) return;
            let next = findNode(node.nodes, str[0]);
            recurse(next, str.slice(1), pointers);
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
                    node.nodes = temp;
                }
                flag = true;
            }
        };
        if (node) {
            recurse(node, str.slice(1));
        }
        return flag;
    }

    /**
     * returns the max size of the tree
     * @param {Array | TrieNode} nodes starting point
     */
    size(nodes = this.root) {
        if (nodes.length == 0) return 0;
        let c = 0;
        for (let i = 0; i < nodes.length; i++) {
            c += this.size(nodes[i].nodes) + 1;
        }
        return c;
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
        if (str == '') return this.getWords();
        return this.getWordsFromNode(b, s.slice(0, str.length - 1));
    }
}

let tree = new TrieSet();
tree.insert('code');
tree.insert('code');
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
console.log(tree.autocomplete('cost'));