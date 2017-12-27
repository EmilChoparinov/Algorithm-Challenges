function geneticMarker(genes, marker) {
    if (genes instanceof Array && typeof marker == 'string') {
        let k = false;

        for (let gene = 0; gene < genes.length; gene++) {
            let s = "";
            if (typeof genes[gene] == 'string') {
                for (let g = 0; g < genes[gene].length; g++) {
                    let currentMarker = "";
                    for (let m = g; m < marker.length + g; m++) {
                        if (genes[gene][m] == "?") {
                            currentMarker += marker[m - g];
                        } else {
                            currentMarker += genes[gene][m];
                        }
                    }
                    if (currentMarker == marker) return true;
                }
            }
        }
        return false;
    }
}

console.log(geneticMarker(["ABCD?F", "AWDWVCW"], "DEF"));