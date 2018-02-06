const reference = require('./graph-adjacency-list'),
    ALGraph = reference.ALGraph,
    ALVertex = reference.ALVertex,
    ALEdge = reference.ALEdge;

/**
 * finds the node path from two given vertices
 * @param {String} vertID1 id of start vertex
 * @param {String} vertID2 id of end vertex
 * @returns {Array<String>} path from vertID1->vertID2
 */
function vertexIsReachable(vertID1, vertID2) {
    const Queue = require('./../chapter-6/linked-list-queue/base-class').Queue;
    const queue = new Queue();
    const visitedVertices = new Set();
    queue.enqueue({ vert: vertID1, path: [] });
    visitedVertices.add(vertID1);
    while (queue.head) {
        const cur = queue.dequeue().val;
        if (cur.vert == vertID2) {
            cur.path.push(vertID2);
            return cur.path;
        }
        for (const ver in graph.graph[cur.vert]) {
            if (!visitedVertices.has(ver)) {
                visitedVertices.add(ver);
                const temp = { vert: ver };
                const arr = cur.path.slice(0);
                arr.push(cur.vert);
                temp['path'] = arr;
                queue.enqueue(temp);
            }
        }
    }
    return [];
}

require('./graph-parser-to-adjacency-list')('./graph.txt', (genGraph) => {
    graph = genGraph;
    const fs = require('fs');
    console.log(vertexIsReachable('L', 'I'));
    fs.writeFile('output.json', JSON.stringify(graph, null, 4), (err) => {
        if (err) {
            throw err;
        }
    });
});