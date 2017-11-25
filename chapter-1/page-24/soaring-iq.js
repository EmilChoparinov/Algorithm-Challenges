function soaringIQ(){
    let hisIQ = 101;
    let increasedIQ = 0;
    for(let day = 1; day <= 98; day++){
        increasedIQ += 0.01;
        hisIQ += increasedIQ;
    }
    console.log(`Bogdans final IQ is ${hisIQ}`)
}

soaringIQ();