
/**
 * Vertex class implementation for Ajacency Map
 */
class Vertex {
    constructor(nodeID, value = null) {
        this.nodeID = nodeID;
        this.value = value;
    }
}

/**
 * Edge class implementation for Adjacency Map
 */
class Edge {
    constructor(value = null, status = -1) {
        this.status = status;
        this.value = value;
    }
}

/**
 * Adjacency Map implementation
 */
class AMGraph {
    constructor() {
        this.graph = {};
    }

    /**
     * Adds a vertex to the map
     * @param {String} nodeID the name of which the vertex is to be called
     */
    addVertex(nodeID) {
        if (this.graph[nodeID]) {
            throw new Error(`'nodeID' ${nodeID} exists`);
        }
        this.graph[nodeID] = {};
        this.graph[nodeID][nodeID] = new Edge(null, 0);
        for (const node in this.graph) {
            if (node !== nodeID) {
                this.graph[node][nodeID] = new Edge();
                this.graph[nodeID][node] = new Edge();
            }
        }
        return nodeID;
    }

    /**
     * removes a vertex and all connections
     * @param {String} nodeID the name of the vertex to remove
     */
    removeVertex(nodeID) {
        delete this.graph[nodeID];
        for (const node in this.graph) {
            delete this.graph[node][nodeID];
        }
    }

    /**
     * add an edge to the map
     * connections work as such:
     * nodeID1 -> (value) -> nodeID2
     * @param {String} nodeID1 name of the first vertex
     * @param {String} nodeID2 name of the second vertex
     * @param {Any} value value to store as a weight
     * 
     */
    addEdge(nodeID1, nodeID2, value) {
        if (!this.graph[nodeID1] || !this.graph[nodeID2] || nodeID1 == nodeID2) {
            throw new Error(`given node values are invalid: '${nodeID1}' -> '${nodeID2}'`);
        }
        this.graph[nodeID1][nodeID2] = new Edge(value, 1);
    }

    /**
     * sets the weight of the given vertex
     * @param {String} nodeID name of the vertex to use
     * @param {Any} value value to store as weight
     */
    setVertexValue(nodeID, value) {
        if (!this.graph[nodeID]) {
            throw new Error(`node does not exist: ${nodeID}`);
        }
        this.graph[nodeID][nodeID]['value'] = value;
    }

    /**
     * removes an edge between two given vertices
     * @param {String} nodeID1 name of the vertex to use
     * @param {String} nodeID2 name of the second vertex to use
     */
    removeEdge(nodeID1, nodeID2) {
        if (!this.graph[nodeID1] || !this.graph[nodeID2] || nodeID1 == nodeID2) {
            throw new Error(`given node values are invalid: '${nodeID1}' -> '${nodeID2}'`);
        }
        this.graph[nodeID1][nodeID2] = new Edge();
    }

    /**
     * removes all edges of a given vertex 
     * (equivalent to .removeVertex(nodeID) and .addVertex(nodeID))
     * @param {String} nodeID name of the vertex to remove edges from
     */
    removeEdges(nodeID) {
        if (!this.graph[nodeID]) {
            throw new Error(`node does not exist: ${nodeID}`);
        }
        for (const edge in this.graph[nodeID]) {
            if (edge !== nodeID) {
                this.graph[nodeID][edge] = new Edge();
            }
        }
    }

    /**
     * gets the vertex value of a given vertex
     * @param {String} nodeID1 name of the vertex to start with
     * @param {String} nodeID2 name of the vertex to end with
     */
    getEdgeValue(nodeID1, nodeID2) {
        if (!this.graph[nodeID1] || !this.graph[nodeID2] || nodeID1 == nodeID2) {
            throw new Error(`given node values are invalid: '${nodeID1}' -> '${nodeID2}'`);
        }
        return this.graph[nodeID1][nodeID2]['value'];
    }

    /**
     * check if two nodes are adjacent to each other O(1)
     * @param {String} nodeID1 name of a vertex
     * @param {String} nodeID2 name of a second vertex
     * @returns {Boolean} true if adjacent, false if not
     */
    isAdjacent(nodeID1, nodeID2) {
        if (!this.graph[nodeID1] || !this.graph[nodeID2] || nodeID1 == nodeID2) {
            throw new Error(`given node values are invalid: '${nodeID1}' -> '${nodeID2}'`);
        }
        return this.graph[nodeID1][nodeID2]['status'] == 1;
    }

    /**
     * retrieves all neighbors of a given vertex
     * @param {String} nodeID name of a vertex
     * @returns {Array<String>} array of vertex IDs
     */
    neighbors(nodeID) {
        if (!this.graph[nodeID]) {
            throw new Error(`node does not exist: ${nodeID}`);
        }
        const a = [];
        for (const neighbor in this.graph[nodeID]) {
            if (this.graph[nodeID][neighbor]['status'] == 1) {
                a.push(neighbor);
            }
        }
        return a;
    }
}

const graph = new AMGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'C', null);
graph.addEdge('B', 'D', null);
graph.addEdge('B', 'D', null);
graph.addEdge('C', 'E', null);
graph.addEdge('C', 'B', null);
graph.addEdge('D', 'A', null);
graph.addEdge('D', 'E', null);
graph.addEdge('E', 'D', null);

console.log(`neighbors of D: ${graph.neighbors('D')}`);
console.log(`adjacency of A -> B: ${graph.isAdjacent('A', 'B')}`);
console.log(`adjacency of C -> B: ${graph.isAdjacent('C', 'B')}`);