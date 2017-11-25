/**
 * Every time the array has three odd values in a row print "That's odd". Every time the array have three even rows in a row print "Even more so!"
 * @param {Array} arr an array of numbers
 */
function evensAndOdds(arr){
    if(arr instanceof Array){
        let evenC = 0;
        let oddC = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                if(evenC >= 3){
                    console.log("even more so!")
                    evenC = 0;
                }
                evenC++;
                oddC = 0;
            }
            else{
                if(oddC >= 3){
                    console.log("that's odd!")
                    oddC = 0;
                }
                oddC++;
                evenC = 0;
            }
        }
    }
}

evensAndOdds([2,2,2,2,2,2,2,5,5,5,5,5,5,5,2,2,2,2])