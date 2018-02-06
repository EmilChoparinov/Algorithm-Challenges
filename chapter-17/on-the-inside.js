const reference = require('./graph-adjacency-list'),
    ALGraph = reference.ALGraph,
    ALVertex = reference.ALVertex,
    ALEdge = reference.ALEdge;

/**
 * find someone in an directed/undirected adjacency list graph
 * @param {String} youID vertex id of the person that search start at
 * @param {Array<String>} people array of vertex ids that the search is looking for
 * @param {ALGraph} graph graph object to search through
 */
const findSomeoneOnTheInside = (youID, people, graph) => {
    let existingConnections = [];
    for (const person of people) {
        if (graph.performExistSearch(youID, person)) {
            existingConnections.push(person);
        }
    }
    return existingConnections;
};

let graph;

require('./graph-parser-to-adjacency-list')('./graph.txt', (genGraph) => {
    graph = genGraph;
    const fs = require('fs');
    const connections = findSomeoneOnTheInside('A', ['G'], genGraph);
    console.log(connections);
    fs.writeFile('output.json', JSON.stringify(graph, null, 4), (err) => {
        if (err) {
            throw err;
        }
    });
});