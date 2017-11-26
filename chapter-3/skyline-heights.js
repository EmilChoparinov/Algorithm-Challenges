/**
 * Returns the viewable skylines O(n) solution
 * @param {Array} arr array of numbers
 */
function skylineHeights(arr){
    if(arr instanceof Array){
        let max = arr[0], maxI = 0;
        while(max < 0){
            max = arr[maxI];
            maxI++;
        }
        let viewables = [max]
        for(let i = maxI; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
                viewables.length++;
                viewables[viewables.length-1] = max;
            }
        }
        return viewables;
    }
}

console.log(skylineHeights([-1,1,1,7,3]))
console.log(skylineHeights([0,4]))