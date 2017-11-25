/**
 * Predicts what happens the next day based on the probabilities that kyle had
 */
function whatReallyHappenedToday(){
    let volcano = .1, tsunamis = .15, earthquake = .2, blizzard = .25, meteor = .3;
    let today = Math.random();
    if(today < volcano) console.log('a volcano happened')
    if(today < tsunamis) console.log('a tsunami happened')
    if(today < earthquake) console.log('an earthquake happened')
    if(today < blizzard) console.log('a blizzard happened')
    if(today < meteor) console.log('a meteor happened')
    console.log(`today: ${today}`)
}

for(var i = 0; i < 10; i++){
    whatReallyHappenedToday()
}