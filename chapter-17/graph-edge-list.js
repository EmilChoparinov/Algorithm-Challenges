class GraphNode {
    constructor(value) {
        this.value = value;
    }
}

class GraphEdge {
    constructor(vertID1, vertID2, value) {
        this.vertID1 = vertID1;
        this.vertID2 = vertID2;
        this.value = value;
    }
}

class GraphEdgeList {
    constructor() {
        this.edges = [];
        this.vertices = [];
    }

    /**
     * adds a vertex to the existing graph
     * @param {Any} value value to be added to the vertex
     * @returns {Number} vertex id added
     */
    addVertex(value) {
        let vertex = new GraphNode(value);
        this.vertices.push(vertex);
        return this.vertices.length - 1;
    }

    /**
     * removes a vertex from the existing graph
     * @param {Number} vertID vertex id to be removed
     * @returns {Boolean} true: removed, false: unfound
     */
    removeVertex(vertID) {

    }

    /**
     * gets the value of a given vertex
     * @param {Number} vertID vertex id to be removed
     * @returns {Any} value at the given vertex
     */
    getVertexValue(vertID) {
        return (this.vertices[vertID]) ? this.vertices[vertID].value : null;
    }

    /**
     * updates the vertex's value to the one provided
     * @param {Number} vertID vertex id to be updated
     * @param {Any} value value to change at the given vertex
     * @returns {Boolean} true: set, false: unfound
     */
    setVertexValue(vertID, value) {
        let vertex = this.vertices[vertID];
        if (vertex) {
            vertex.value = value;
            return true;
        }
        return false;
    }

    /**
     * adds an edge to the existing graph
     * @param {Number} vertID1 first vertex id
     * @param {Number} vertID2 second vertex id to complete an edge
     * @param {Any} value value to be stored on that edge
     * @returns {Boolean} true: added, false: unfound
     */
    addEdge(vertID1, vertID2, value) {
        let vertex1 = this.vertices[vertID1];
        let vertex2 = this.vertices[vertID2];
        if (vertex1 && vertex2) {
            let edge = new GraphEdge(vertID1, vertID2, value);
            this.edges.push(edge);
        }
        return false;
    }

    /**
     * removes all edges from a given vertex id on an existing graph
     * @param {Number} vertID vertex id to have all its edges removed
     */
    removeEdges(vertID) {
        let newList = [];
        while (this.edges.length != 0) {
            let edge = this.edges.pop();
            if (edge.vertID1 != vertID && edge.vertID2 != vertID) {
                newList.push(edge);
            }
        }
        this.edges = newList;
    }

    /**
     * removes an edge from two given vertices on an existing graph
     * @param {Number} vertID1 first vertex id
     * @param {Number} vertID2 second vertex id
     * @returns {Boolean} true: removed, false: unfound
     */
    removeEdge(vertID1, vertID2) {
        let newList = [];
        let isRemoved = false;
        while (this.edges.length != 0) {
            let edge = this.edges.pop();
            if (this.isVerticesOnEdge(edge, vertID1, vertID2)) {
                isRemoved = true;
                continue;
            }
            newList.push(edge);
        }
        this.edges = newList;
        return isRemoved;
    }

    /**
     * checks if the given edge contains those two vertex points
     * @param {GraphEdge} edge edge to check
     * @param {Number} vertID1 vertex id 1
     * @param {Number} vertID2 vertex id 2
     */
    isVerticesOnEdge(edge, vertID1, vertID2) {
        return edge.vertID1 == vertID1 && edge.vertID2 == vertID2 ||
            edge.vertID1 == vertID2 && edge.vertID2 == vertID1;
    }

    /**
     * retrieves the value stored in that edges edge
     * @param {Number} vertID1 first vertex id
     * @param {Number} vertID2 second vertex id
     * @returns {Any} value of the edge
     */
    getEdgeValue(vertID1, vertID2) {
        for (let i = 0; i < this.edges.length; i++) {
            let edge = this.edges[i];
            if (edge instanceof GraphEdge) {
                if (this.isVerticesOnEdge(edge, vertID1, vertID2)) {
                    return edge.value;
                }
            }
        }
        return null;
    }

    /**
     * updates the given edge to the given value
     * @param {Number} vertID1 first vertex id
     * @param {Number} vertID2 second vertex id
     * @param {Any} value value to store
     * @returns {Boolean} true: set, false: unfound
     */
    setEdgeValue(vertID1, vertID2, value) {
        for (let i = 0; i < this.edges.length; i++) {
            let edge = this.edges[i];
            if (edge instanceof GraphEdge) {
                if (this.isVerticesOnEdge(edge, vertID1, vertID2)) {
                    edge.value = value;
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * finds out of the first vertex is adjacent to the second vertex
     * @param {Number} vertID1 first vertex id
     * @param {Number} vertID2 second vertex id
     * @returns {Boolean} true: is adjacent, false: not adjacent
     */
    adjacent(vertID1, vertID2) {
        for (let i = 0; i < this.edges.length; i++) {
            let edge = this.edges[i];
            if (edge instanceof GraphEdge) {
                if (this.isVerticesOnEdge(edge, vertID1, vertID2)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * gets all adjacent vertices
     * @param {Number} vertID vertex id
     * @returns {Array} array of ajacent vertIDs
     */
    neighbors(vertID) {
        let vertices = [];
        for (let i = 0; i < this.edges.length; i++) {
            let edge = this.edges[i];
            if (edge instanceof GraphEdge) {
                if (edge.vertID1 == vertID) {
                    vertices.push(this.getVertexValue(edge.vertID2));
                }
            }
        }
        return vertices;
    }
}

let graph = new GraphEdgeList();
let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');

graph.addEdge(A, C, null);
graph.addEdge(A, E, null);
graph.addEdge(B, C, null);
graph.addEdge(C, B, null);
graph.addEdge(B, A, null);
graph.addEdge(D, B, null);
graph.addEdge(D, E, null);
graph.addEdge(E, D, null);

console.log(graph.adjacent(A, D));
console.log(graph.neighbors(A));