const fs = require('fs');
const readline = require('readline');
const Graph = require('./graph-adjacency-list').ALGraph;

/**
 * generates a graph of the given graph data
 * @param {Function} callback 
 */
function generateGraph(path, callback) {
    const instream = fs.createReadStream(path);
    const outstream = new (require('stream'))();
    const rl = readline.createInterface(instream, outstream);
    const graph = new Graph();
    rl.on('line', (line) => {
        if (typeof line == 'string') {
            if (line.includes('->')) {
                onVerts = false;
                const vert1 = line.slice(0, line.indexOf('-'));
                const vert2 = line.slice(line.indexOf('>') + 1, line.length);
                graph.addEdge(vert1, vert2);
            }
            else if (!line.startsWith('#')) {
                graph.addVertex(line);
            }
        }
    });

    rl.on('close', () => {
        callback(graph);
    });
}

module.exports = generateGraph;