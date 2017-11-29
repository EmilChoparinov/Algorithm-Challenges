/**
 * finds the longest common suffix from the array of strings in O(2n + n^2) time complexity
 * @param {Array|String} arr an array of strings
 */
function commonSuffix(arr){
    if(arr instanceof Array){
        let findShortestLength = function (a){
            if(a instanceof Array){
                let min = a[0].length;
                a.forEach(function(e){
                    if(min > e.length){
                        min = e.length;
                    }
                });
                return min;
            }
        }

        let reverse = function (str){
            if(typeof str == 'string'){
                let r = "";
                for(let i = str.length -1; i >= 0; i--) r += str[i];
                return r;
            }
        }
        let cL = findShortestLength(arr);
        let commonSuffix = "";
        for(let i = 0; i < cL; i++){
            for(let j = 0; j < arr.length-1; j++){
                let word1 = arr[j];
                let word2 = arr[j+1];
                if(word1[word1.length-1-i] !== word2[word2.length-1-i]){
                    return reverse(commonSuffix);
                }
            }
            let word = arr[0];
            commonSuffix += word[word.length - 1 - i];
        }
        return reverse(commonSuffix);
    }
}

console.log(commonSuffix(['deforestation', 'citation', 'conviction', 'incarceration']));


console.log(commonSuffix(['aab1', 'awdaab2', 'acaab3', 'abaaab4']));