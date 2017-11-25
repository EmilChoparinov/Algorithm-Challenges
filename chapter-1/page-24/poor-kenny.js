/**
 * Predicts what happens the next day based on the probabilities that kenny had
 */
function whatHappenedToday(){
    let volcano = .1, tsunamis = .15, earthquake = .2, blizzard = .25; meteor = .3;
    let today = Math.random();
    if(today <= volcano) console.log('a volcano happened');
    else if(today <= tsunamis + volcano) console.log('a tsumani happened')
    else if(today <= earthquake + tsunamis + volcano) console.log('a earthquake happened')
    else if(today <= blizzard + earthquake + tsunamis + volcano) console.log('a blizzard happened')
    else if(today <= meteor + blizzard + earthquake + tsunamis + volcano) console.log('a meteor happened')
    console.log(`today: ${today}`)
}

for(var i = 0; i < 10; i++){
    whatHappenedToday()
}