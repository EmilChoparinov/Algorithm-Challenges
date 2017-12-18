function bufferCopy(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) {
    if (
        sourceArr instanceof Array &&
        destArr instanceof Array &&
        typeof sourceStartIdx == "number" &&
        typeof destStartIdx == "number" &&
        typeof numVals == "number"
    ) {
        let c = sourceStartIdx;
        while (c < sourceStartIdx + numVals) {
            if (destArr[c] == undefined || sourceArr[c] == undefined) {
                break;
            }
            destArr[c] = sourceArr[c];
            c++;
        }
    }
}

function bufferCopyWrap(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) {
    if (
        sourceArr instanceof Array &&
        destArr instanceof Array &&
        typeof sourceStartIdx == "number" &&
        typeof destStartIdx == "number" &&
        typeof numVals == "number"
    ) {
        let c = 0;
        while (c < numVals) {
            destArr[(destStartIdx + c) % destArr.length] = sourceArr[(sourceStartIdx + c) % sourceArr.length];
            c++;
        }
    }
}

function bufferCopyToEnd(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) {
    if (
        sourceArr instanceof Array &&
        destArr instanceof Array &&
        typeof sourceStartIdx == "number" &&
        typeof destStartIdx == "number" &&
        typeof numVals == "number"
    ) {
        let c = sourceStartIdx;
        while (c < sourceStartIdx + numVals) {
            if (destArr[c] == undefined || sourceArr[c] == undefined) {
                break;
            }
            destArr[c] = sourceArr[c];
            c++;
        }
    }
}

function bufferCopyExtended(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) {
    if (
        sourceArr instanceof Array &&
        destArr instanceof Array &&
        typeof sourceStartIdx == "number" &&
        typeof destStartIdx == "number" &&
        typeof numVals == "number"
    ) {
        let c = sourceStartIdx;
        while (c < sourceStartIdx + numVals) {
            if (sourceArr[c] == undefined) break;
            destArr[c] = sourceArr[c];
            c++;
        }
    }
}

function bufferCopyFifth(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) {
    if (
        sourceArr instanceof Array &&
        destArr instanceof Array &&
        typeof sourceStartIdx == "number" &&
        typeof destStartIdx == "number" &&
        typeof numVals == "number"
    ) {
        let c = 0;
        while (c < numVals) {
            destArr[(destStartIdx + c) % destArr.length] = sourceArr[(sourceStartIdx + c) % sourceArr.length];
            c++;
        }
    }
}

let x = [1, 2, 3, 4, 5, 6];
let y = [7, 8, 9, 10];
bufferCopyFifth(x, y, 0, 0, 10);
console.log(x, y);