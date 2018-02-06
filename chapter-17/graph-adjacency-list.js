class ALVertex {
    constructor(vertexValue = null) {
        this.vertexValue = vertexValue;
    }
}

class ALEdge {
    constructor(value = null) {
        this.value = value;
    }
}

class SNode {
    constructor(node, prev) {
        this.node = node;
        this.prev = prev;
    }
}

class ALGraph {
    constructor() {
        this.graph = {};
    }

    addVertex(vertID) {
        if (this.graph[vertID]) {
            throw new Error(`vertex already exists: ${vertID}`);
        }
        this.graph[vertID] = new ALVertex();
    }

    removeVertex(vertID) {
        delete this.graph[vertID];
        for (const vert in this.graph) {
            delete this.graph[vert][vertID];
        }
    }

    getVertexValue(vertID) {
        if (!this.graph[vertID]) {
            return false;
        }
        return this.graph[vertID]['value'];
    }

    setVertexValue(vertID, value) {
        if (!this.graph[vertID]) {
            return false;
        }
        this.graph[vertID]['value'] = value;
        return true;
    }

    addEdge(vertID1, vertID2, value = null) {
        if (!this.graph[vertID1] || !this.graph[vertID2] || vertID1 == vertID2) {
            return true;
        }
        this.graph[vertID1][vertID2] = new ALEdge(value);
    }

    removeEdges(vertID) {
        if (this.graph[vertID]) {
            for (const edge in this.graph[vertID]) {
                delete this.graph[vertID][edge];
            }
            return true;
        }
        return false;
    }

    removeEdge(vertID1, vertID2) {
        if (this.graph[vertID1] && this.graph[vertID2] && this.graph[vertID1][vertID2]) {
            delete this.graph[vertID][vertID2];
            return true;
        }
        return false;
    }

    getEdgeValue(vertID1, vertID2) {
        if (this.graph[vertID1]) {
            return this.graph[vertID1][vertID2];
        }
        return null;
    }

    setEdgeValue(vertID1, vertID2, value) {
        if (this.graph[vertID1] && this.graph[vertID2] && this.graph[vertID1][vertID2]) {
            this.graph[vertID1][vertID2]['value'] = value;
            return true;
        }
        return false;
    }

    isAdjacent(vertID1, vertID2) {
        if (this.graph[vertID1] && this.graph[vertID2]) {
            return (this.graph[vertID1][vertID2]) ? true : false;
        }
        return false;
    }

    neighbors(vertID) {
        if (this.graph[vertID]) {
            const a = [];
            for (const vert in this.graph[vertID]) {
                if (vert !== 'vertexValue') {
                    a.push(vert);
                }
            }
            return a;
        }
    }

    performExistSearch(vertID1, vertID2) {
        const reference = require('./../chapter-6/linked-list-queue/base-class');
        const Queue = reference.Queue;
        const queue = new Queue();

        queue.enqueue(vertID1);
        const visitedNodes = new Set();

        while (queue.head) {
            const vertex = queue.dequeue().val;
            visitedNodes.add(vertex);
            if (vertex == vertID2) {
                return true;
            }
            for (const ver in this.graph[vertex]) {
                if (!visitedNodes.has(ver)) {
                    queue.enqueue(ver);
                }
            }
        }
        return false;
    }
}

// const graph = new ALGraph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'D');
// graph.addEdge('A', 'E');
// graph.addEdge('B', 'A');
// graph.addEdge('B', 'F');
// graph.addEdge('C', 'F');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'A');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'A');
// graph.addEdge('E', 'F');
// graph.addEdge('E', 'D');
// graph.addEdge('F', 'B');
// graph.addEdge('F', 'E');
// graph.addEdge('F', 'D');
// graph.addEdge('F', 'C');

// console.log(graph.performExistSearch('A', 'C'));

module.exports = {
    ALEdge: ALEdge,
    ALGraph: ALGraph,
    ALVertex: ALVertex
};