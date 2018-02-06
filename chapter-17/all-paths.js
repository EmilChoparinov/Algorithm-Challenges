const reference = require('./graph-adjacency-list'),
    ALGraph = reference.ALGraph,
    ALVertex = reference.ALVertex,
    ALEdge = reference.ALEdge;

/**
 * finds all the paths from two given vertices
 * @param {String} vertID1 id of start vertex
 * @param {String} vertID2 id of end vertex
 * @param {ALGraph} graph graph to search through
 * @returns {Array<Array<String>>} all paths from vertID1->vertID2
 */
function findPaths(vertID1, vertID2, graph, paths = [], path = [], visited = {}) {
    if (vertID1 == vertID2) {
        path.push(vertID1);
        paths.push(path);
        return paths;
    }
    path.push(vertID1);
    visited[vertID1] = vertID1;
    for (const vert in graph.graph[vertID1]) {
        if (!visited[vert] && vert !== 'vertexValue') {
            findPaths(vert, vertID2, graph, paths, path.slice(0), JSON.parse(JSON.stringify(visited)));
        }
    }
    return paths;
}

require('./graph-parser-to-adjacency-list')('./graph.txt', (genGraph) => {
    graph = genGraph;
    const fs = require('fs');
    console.log(findPaths('A', 'D', graph));
    fs.writeFile('output.json', JSON.stringify(graph, null, 4), (err) => {
        if (err) {
            throw err;
        }
    });
});